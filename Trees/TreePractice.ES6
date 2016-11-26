'use strict';

/*
  Array slice and splice:

  1. Slice returns a shallow copy of the portion of the array.
  2. Splice returns the elements removed from the array.
*/

class Node {
	constructor(data) { 
    this._data = data;
    this._left = null;
    this._right = null;
  }
}

class Tree {
  constructor() {
   
  }

  minimalTree(arr, left, right) {
    if (left > right) {
      return null;
    }

    let mid = Math.floor((left + right) / 2);
    console.log('Mid', mid);
    let node = new Node(arr[mid]);
    node._left = this.minimalTree(arr, left, mid - 1);
    node._right = this.minimalTree(arr, mid + 1, right);

    return node;
    
  }

  searchElementInBinaryTree(rootNode, data) {
    if (rootNode === null) {
      return false;
    } else if (rootNode._data === data) {
      console.log('Element Found');
      return true;
    } 
    else {
      console.log('rootnode data', rootNode._data);
      return (this.searchElementInBinaryTree(rootNode._left)  || 
      this.searchElementInBinaryTree(rootNode._right));
    }

    return false;
  }
  

  inOrderTraversal(root) {
    if (root !== null) {
      this.inOrderTraversal(root._left);
      console.log(root._data);
      this.inOrderTraversal(root._right);
    }
  }

  /* A binary tree is binary search tree if all the nodes in left subtree are less than x and 
     all the nodes in the right subtree are greater than x

     1. Find the rightmost element in left subtree
     2. Compare with root
     3. Find leftmost element in right subtree
     4. Compare with root.
     5. ValidateBST(left) && validateBST(right).
  */

  validateBST(root) {
    let leftChild,
      rightChild;

    leftChild = this.findRightMostElement(root._left);
    rightChild = this.findLeftMostElement(root._right);

    if (root._data >= leftChild && root._data < rightChild) {
      return (this.validateBST(root._left) && this.validateBST(root._right);
    }
  }

  findRightMostElement(node) {
    if (node === null) {
      return Number.MIN_VALUE;
    }

    while(node._right) {
      node = node._right;
    }
    return node._data;
  }

  findLeftMostElement(node) {
    if (node === null) {
      return Number.MAX_VALUE;
    }

    while(node._left) {
      node = node._left;
    }

    return node._data;
  }

  checkBalanced(root) {
    if (root == null) {
      return true;
    }
    let heightOfLeftSubtree,
      heightOfRightSubtree;

    heightOfLeftSubtree = this.heightOfTree(root.left)
    heightOfRightSubtree = this.heightOfTree(root.right);

    if (Math.abs(heightOfLeftSubtree - heightOfRightSubtree) > 1) {
      return false;
    } else {
      return (this.checkBalanced(root._left) && this.checkBalanced(root._right));
    }
  }

  heightOfTree(node) {
    let leftSubTreeHeight,
      rightSubTreeHeight,
      larger;

    if (node === null) {
      return 0;
    } 

    leftSubTreeHeight = this.heightOfTree(node._left);
    rightSubTreeHeight = this.heightOfTree(node._right);
    return Math.max(leftSubTreeHeight, rightSubTreeHeight) + 1;   // Return height
  }
}

let treeExample = new Tree();
let arr = [ 12, 14, 17, 19, 20, 23, 27, 29, 30, 32 ];
let root = treeExample.minimalTree(arr, 0, 9);
console.log(root);
treeExample.searchElementInBinaryTree(root, 30);