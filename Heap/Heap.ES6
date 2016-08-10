/**
 *
 * Heap Representation
 *
 * Time Complexity: O(N log N)
 * @param {Array} array
 *
 */


class HeapSort {

  constructor(heapCapacity, heapType) {
    this._heapArray = new Array(heapCapacity);
    this._heapType = heapType;      // max-heap or min-heap
    this._count = 0;
  }

  getParent(i) {
    if (i <= 0 || i >= this._count) {
      return -1
    }
    return (i-1)/2;
  }

  getLeftChild(i) {
    let left = 2 * i + 1;
    if (left >= this._count) {
      return -1
    }

    return left;
  }

  getRightChild(i) {
    let right = 2 * i + 2;
    if (right >= this._count) {
      return -1;
    }

    return right;
  }

  getMaximum() {
    if (this._count == 0) {
      return -1
    }

    return this._heapArray[0];
  }

  /* Heapifying - percolate up or down . Here we are doing percolate down */

  heapify(i) {
    while (i < this._count/2) {
      let largerChild = -1,
        leftChild = this.getLeftChild(i),
        rightChild = this.getRightChild(i);

      if (leftChild > rightChild) {
        largerChild = 2 * i + 1;
      }
      else {
        largerChild = 2 * i + 2;
      }

      if (this._heapArray[i] < largerChild) {
        swap(i, largerChild);
      }
    }
  }
}
