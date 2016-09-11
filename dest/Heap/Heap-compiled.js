"use strict";

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/**
 *
 * Heap Representation
 *
 * Time Complexity: O(N log N)
 * @param {Array} array
 *
 */

var HeapSort = function () {
  function HeapSort(heapCapacity, heapType) {
    _classCallCheck(this, HeapSort);

    this._heapArray = new Array(heapCapacity);
    this._heapType = heapType; // max-heap or min-heap
    this._count = 0;
  }

  _createClass(HeapSort, [{
    key: "getParent",
    value: function getParent(i) {
      if (i <= 0 || i >= this._count) {
        return -1;
      }
      return (i - 1) / 2;
    }
  }, {
    key: "getLeftChild",
    value: function getLeftChild(i) {
      var left = 2 * i + 1;
      if (left >= this._count) {
        return -1;
      }

      return left;
    }
  }, {
    key: "getRightChild",
    value: function getRightChild(i) {
      var right = 2 * i + 2;
      if (right >= this._count) {
        return -1;
      }

      return right;
    }
  }, {
    key: "getMaximum",
    value: function getMaximum() {
      if (this._count == 0) {
        return -1;
      }

      return this._heapArray[0];
    }

    /* Heapifying - percolate up or down . Here we are doing percolate down */

  }, {
    key: "heapify",
    value: function heapify(i) {
      while (i < this._count / 2) {
        var largerChild = -1,
            leftChild = this.getLeftChild(i),
            rightChild = this.getRightChild(i);

        if (leftChild > rightChild) {
          largerChild = 2 * i + 1;
        } else {
          largerChild = 2 * i + 2;
        }

        if (this._heapArray[i] < largerChild) {
          swap(i, largerChild);
        }
      }
    }
  }]);

  return HeapSort;
}();

//# sourceMappingURL=Heap-compiled.js.map