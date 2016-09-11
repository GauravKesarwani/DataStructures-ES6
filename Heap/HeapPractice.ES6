'use strict';

/*
	A heap is represented as array in JavaScript.
	1. Heap property: Value of a node must be > or < than the value of its children.
	2. All the leaves should be at h or h - 1 levels.

	Operations: heapify
*/

class Heap {
	constructor(capacity, heapType) {
		this._heapArray = new Array(capacity);
		this._count = 0;
		this._heapType = heapType;
	}

	getParent(i) {
		if (i <=0 || i >= this._count) {
			return -1;
		}
		return (i-1)/2;
	}

	getLeftChild(i) {
		const left = 2 * i + 1;

		if (left >= this._count) {
			return -1;
		}
		return left;
	}

	getRightChild(i) {
		const right = 2 * i + 2;

		if (right >= this._count) {
			return -1;
		}
		return right;
	}

	getMaxElement() {
		if (this._count === 0) {
			return -1;
		}
		return this.heapArray[0];
	}

	// known as heapify or percolate down. Iterative.
	// Todo: Write the recursive version of hepaify.
	heapify(i) {
		let leftChild,
		  rightChild,
		  largerChild;

		let root = this._heapArray[i];  
		while(i < this._count/2) {
			leftChild = 2 * i + 1;
			rightChild = 2 * i + 2;

			if (rightChild < this._count && this._heapArray[leftChild] >= this._heapArray[rightChild]) {
				largerChild = leftChild;
			} 
			else {
				largerChild = rightChild;
			}

			if (root > this._heapArray[largerChild]) {
				break;
			}

			this._heapArray[i] = this._heapArray[largerChild];
			i = largerChild;
		}

		this._heapArray[i] = root;

	}

	printHeap() {
		for (let i = 0; i < this._heapArray.length; i++) {
			console.log(this._heapArray[i]);
		}
	}
}

const heap = new Heap(10, 'max-heap');
heap._heapArray[0] = 8;
heap._heapArray[1] = 16;
heap._heapArray[2] = 18;
heap._heapArray[3] = 12;
heap._heapArray[4] = 15;
heap._heapArray[5] = 14;
heap._heapArray[6] = 17;
heap._heapArray[7] = 10;
heap._heapArray[8] = 11;
heap._heapArray[9] = 13;
heap._count = 10;

heap.heapify(0);
heap.printHeap();

