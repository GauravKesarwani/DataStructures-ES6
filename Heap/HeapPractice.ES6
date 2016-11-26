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
    this._capacity = capacity;
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

  // assuming max heap implementation
  getMaxElement() {
    if (this._count === 0) {
      return -1;
    }
    return this.heapArray[0];
  }



  // Iterative: heapify or percolate down.
  // Todo: Write the recursive version of hepaify.
  iterativeHeapify(i) {
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

  // Recursive heapify. Easier. Time complexity = O(logn)
  recursiveHeapify(i) {
    let largest = i,
      leftChild = 2 * i + 1,
      rightChild = 2 * i + 2;

    if (leftChild < this._count && this._heapArray[leftChild] > largest) {
      largest = leftChild;
    }  

    if (rightChild < this._count && this._heapArray[rightChild] > largest) {
      largest = rightChild;
    }
    
    if (i !== largest) {
      swap(i, largest);

      this.heapify(largest);
    }
  }

  deleteElement() {
    const data = this._heapArray[0];
    this._heapArray[0] = this._heapArray[--this._count];
    this.recursiveHeapify(0);
    return data;
  }

  insertElement(data) {
    if (this._count === this._capacity) {
      this.expandHeap();
    }

    let index = this._count - 1;
    while(index > 0 && data > this._heapArray[(index -1)/2]) {
      this._heapArray[index] = this._heapArray[(index - 1)/2];
      index = (index - 1)/2;
    }
    this._heapArray[index] = data;
  }

  printHeap() {
    for (let i = 0; i < this._heapArray.length; i++) {
      console.log(this._heapArray[i]);
    }
  }

  deleteMin() {
    
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

