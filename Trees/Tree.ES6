'use strict';

class Node {
  constructor(data) {
    this._data = data;
    this._leftptr = null;
    this._rightptr = null;
  }
}

class BinarySearchTree {
  constructor(root) {
    this._root = root;
  }

  convertArrayToBST(arr, l, r) {
    let mid = l + (r - l) / 2;

    if (l > r) {
      return null;
    }

    if (l < r) {
      this._root = new Node(arr[mid]);

      // call recursively with the left and right subarrays
      this._root._leftptr = convertArrayToBST(arr, l, mid - 1);
      this._root._rightptr = convertArrayToBST(arr, mid + 1, r);
    }

    return this._root;
  }

  lowestCommonAncestor(root, nodeA, nodeB) {
    if (root === null) {
      return null;
    }
    else if (nodeA < root._data && nodeB < root._data) {
    //console.log(root);
      return this.lowestCommonAncestor(root._leftptr, nodeA, nodeB);
    }
    else if (nodeA > root._data && nodeB > root._data){
      return this.lowestCommonAncestor(root._rightptr, nodeA, nodeB);
    }

    return root;
  }

  inOrderTraversal(root) {
    if (root !== null) {
      this.inOrderTraversal(root._leftptr);
      console.log(root._data);
      this.inOrderTraversal(root._rightptr);
    }
  }

  /* kth smallest element in BST. Recursive solution isn't working. Please use stack. */
  findKthSmallest(root, k, count) {
    if (root === null) {
      return null;
    }
    let left = this.findKthSmallest(root._leftptr, k, count);
    if(left != null) {
      return left;
    }
    if(++count == k) {
      return root;
    }
    return this.findKthSmallest(root._rightptr, k, count);
  }

  /* find the vertical sum of the nodes that are in same binary line */
  findVerticalSum(root, hd, hm) {
    if (root == null) {
      return;
    }

    this.findVerticalSum(root._leftptr, hd - 1, hm);
    if (hm.hasOwnProperty(hd)) {
      hm[hd] = hm[hd] + root._data;
    }
    else {
      hm[hd] = root._data;
    }
    this.findVerticalSum(root._rightptr, hd + 1, hm);
  }

  /* find the height of binary tree */
  calculateHeight(root) {
    if (root === null) {
      return 0;
    }

    let leftSubtreeHeight = this.calculateHeight(root._leftptr),
      rightSubtreeHeight = this.calculateHeight(root._rightptr);

    return (leftSubtreeHeight > rightSubtreeHeight) ? 1 + leftSubtreeHeight : 1 + rightSubtreeHeight;  
  }

  // check if binary tree is balanced or not
  checkIfBalanced(rootNode) {
    if (rootNode === null) {
      return true;
    }
    else {
      let heightOfLeftSubtree = this.calculateHeight(rootNode._leftptr),
        heightOfRightSubtree = this.calculateHeight(rootNode._rightptr);

      if (Math.abs(heightOfLeftSubtree - heightOfRightSubtree > 1)) {
        return false;
      }
      else {  // Recurse
        this.checkIfBalanced(rootNode._leftptr);
        this.checkIfBalanced(rootNode._rightptr);
      }
    }
    return true;
  }

  findMaximumElement(rootNode) {
    let max = Number.MIN_VALUE;

    if (rootNode !== null) {
      let leftMax,
        rightMax,
        max;

      leftMax = this.findMaximumElement(rootNode._leftptr);
      rightMax = this.findMaximumElement(rootNode._rightptr);

      max = (leftMax > rightMax) ? leftMax : rightMax;

      if (rootNode._data > max) {
        max = rootNode._data;
      } 
    }
    return max;
  }


}


const arr = [ 12, 15, 18, 19, 22, 24, 27, 30 ];

const rootNode = new Node(1);
rootNode._leftptr = new Node(20);
rootNode._rightptr = new Node(3);
rootNode._leftptr._leftptr = new Node(4);
rootNode._leftptr._rightptr = new Node(5);
rootNode._rightptr._leftptr = new Node(6);
rootNode._rightptr._rightptr = new Node(7);

let binSearchTree = new BinarySearchTree(rootNode);

binSearchTree.searchElementInBinaryTree(5);


