'use strict';

import Node from './Node';

const winston = require('winston');
winston.level = 'debug';

class BinaryTree {

  // Way to implement multiple constructors in JavaScript
  constructor(root) {
    if (!arguments.length) {
      this.root = null;
    } else {
      this.root = root;
    }
  }

  inorderTreeTraversal(root) {
    //console.log(root.data);
    if (root!== null) {
      this.inorderTreeTraversal(root.leftptr);
      winston.info(root.data);
      this.inorderTreeTraversal(root.rightptr);
    }
  }
}

const binaryTree = new BinaryTree();
binaryTree.root = new Node(12);
binaryTree.root.leftptr = new Node(5);
binaryTree.root.rightptr = new Node(15);
binaryTree.root.leftptr.leftptr = new Node(3);
binaryTree.root.leftptr.rightptr = new Node(6);

// Traverse tree in inorder

binaryTree.inorderTreeTraversal(binaryTree.root);