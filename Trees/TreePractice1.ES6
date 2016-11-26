'use strict';

class Node {
	constructor(data) {
		this._data = data;
		this._leftptr = null;
		this._rightptr = null;
	}
}

class TreePractice1 {
	constructor(root) {
		this._root = root;
	}

	preOrderTraversal(root) {
		if (root) {
			console.log(root.data);
			this.preOrderTraversal(root._leftptr);
			this.preOrderTraversal(root._rightptr);
		}
	}

	postOrderTraversal(root) {
		if (root) {
			this.postOrderTraversal(root._leftptr);
			this.postOrderTraversal(root._rightptr);
			console.log(root.data);
		}
	}

	inOrderTraversal(root) {
		if (root) {
			this.inOrderTraversal(root._leftptr);
			console.log(root.data);
			this.inOrderTraversal(root._rightptr);
		}
	}

	iterativePreOrderTraversal(root) {
		let stack = [ ];
		while(true) {
			while(root) {
				// visit the root
				console.log(root._data);
				stack.push(root);
				root = root._leftptr;
			}

			if (!stack.length) {
				break;
			}

			let node = stack.pop();
			if (node._rightptr) {
				root = node._rightptr;
			}
		}
	}


	// correct the below algorithm
	iterativeInOrderTraversal(root) {
		let stack = [ ];
		while(true) {
			while(root) {
				stack.push(root);
				root = root._leftptr;
			}

			while(stack.length) {
				let temp = stack.pop();
				console.log(temp._data);
				if (temp._rightptr) {
					root = temp._rightptr;
					break;
				}
			}
		}
	}
}

// construct a tree

const root = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
root._leftptr = nodeB;
root._rightptr = nodeC;
const nodeD = new Node("D");
const nodeE = new Node("E");
nodeB._leftptr = nodeD;
nodeB._rightptr = nodeE;
const nodeF = new Node("F");
const nodeG = new Node("G");
nodeC._leftptr = nodeF;
nodeC._rightptr = nodeG;

let tree = new TreePractice1(root);
