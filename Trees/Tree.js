'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(data) {
  _classCallCheck(this, Node);

  this._data = data;
  this._leftptr = null;
  this._rightptr = null;
};

var BinarySearchTree = function () {
  function BinarySearchTree(root) {
    _classCallCheck(this, BinarySearchTree);

    this._root = root;
  }

  _createClass(BinarySearchTree, [{
    key: 'convertArrayToBST',
    value: function (_convertArrayToBST) {
      function convertArrayToBST(_x, _x2, _x3) {
        return _convertArrayToBST.apply(this, arguments);
      }

      convertArrayToBST.toString = function () {
        return _convertArrayToBST.toString();
      };

      return convertArrayToBST;
    }(function (arr, l, r) {
      var mid = l + (r - l) / 2;

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
    })
  }, {
    key: 'lowestCommonAncestor',
    value: function lowestCommonAncestor(root, nodeA, nodeB) {

      if (root === null) {
        return null;
      } else if (nodeA < root._data && nodeB < root._data) {
        //console.log(root);
        return this.lowestCommonAncestor(root._leftptr, nodeA, nodeB);
      } else if (nodeA > root._data && nodeB > root._data) {
        return this.lowestCommonAncestor(root._rightptr, nodeA, nodeB);
      }

      return root;
    }
  }, {
    key: 'inOrderTraversal',
    value: function inOrderTraversal(root) {
      if (root !== null) {
        this.inOrderTraversal(root._leftptr);
        console.log(root._data);
        this.inOrderTraversal(root._rightptr);
      }
    }

    /* kth smallest element in BST. Recursive solution isn't working. Please use stack. */

  }, {
    key: 'findKthSmallest',
    value: function findKthSmallest(root, k, count) {
      if (root === null) {
        return null;
      }
      var left = this.findKthSmallest(root._leftptr, k, count);
      if (left != null) {
        return left;
      }
      if (++count == k) {
        return root;
      }
      return this.findKthSmallest(root._rightptr, k, count);
    }

    /* find the vertical sum of the nodes that are in same binary line */

  }, {
    key: 'findVerticalSum',
    value: function findVerticalSum(root, hd, hm) {
      if (root == null) {
        return;
      }

      this.findVerticalSum(root._leftptr, hd - 1, hm);
      if (hm.hasOwnProperty(hd)) {
        hm[hd] = hm[hd] + root._data;
      } else {
        hm[hd] = root._data;
      }
      this.findVerticalSum(root._rightptr, hd + 1, hm);
    }

    /* find the height of binary tree */

  }, {
    key: 'calculateHeight',
    value: function calculateHeight(root) {
      if (root === null) {
        return 0;
      }

      var leftSubtreeHeight = this.calculateHeight(root._leftptr),
          rightSubtreeHeight = this.calculateHeight(root._rightptr);

      return leftSubtreeHeight > rightSubtreeHeight ? 1 + leftSubtreeHeight : 1 + rightSubtreeHeight;
    }

    // check if binary tree is balanced or not

  }, {
    key: 'checkIfBalanced',
    value: function checkIfBalanced(rootNode) {
      if (rootNode === null) {
        return true;
      } else {
        var heightOfLeftSubtree = this.calculateHeight(rootNode._leftptr),
            heightOfRightSubtree = this.calculateHeight(rootNode._rightptr);

        if (Math.abs(heightOfLeftSubtree - heightOfRightSubtree > 1)) {
          return false;
        } else {
          // Recurse
          this.checkIfBalanced(rootNode._leftptr);
          this.checkIfBalanced(rootNode._rightptr);
        }
      }
      return true;
    }
  }]);

  return BinarySearchTree;
}();

var arr = [12, 15, 18, 19, 22, 24, 27, 30];

var rootNode = new Node(1);
rootNode._leftptr = new Node(2);
rootNode._rightptr = new Node(3);
rootNode._leftptr._leftptr = new Node(4);
rootNode._leftptr._leftptr = new Node(5);
rootNode._rightptr._leftptr = new Node(6);
rootNode._rightptr._rightptr = new Node(7);

var binSearchTree = new BinarySearchTree(rootNode);

console.log(binSearchTree.checkIfBalanced(rootNode));
