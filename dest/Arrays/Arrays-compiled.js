'use strict';

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

var ArrayAlgorithms = function () {
  function ArrayAlgorithms(inputArr) {
    _classCallCheck(this, ArrayAlgorithms);

    this._inputArr = inputArr;
    this._outputArr = [];
  }

  _createClass(ArrayAlgorithms, [{
    key: 'removeDuplicates',
    value: function removeDuplicates() {
      var arrayLength = this._inputArr.length;

      this._outputArr.push(this._inputArr[0]);
      for (var i = 1; i < arrayLength; i++) {
        var j = i - 1;

        while (j >= 0) {
          if (this._inputArr[j] === this._inputArr[i]) {
            break;
          }
          j--;
        }

        if (j === -1) {
          this._outputArr.push(this._inputArr[i]);
        }
      }
      return this._outputArr;
    }
  }, {
    key: 'sumX',
    value: function sumX(n) {
      // Brute force solution
      var arrayLength = this._inputArr.length;
      for (var i = 0; i < arrayLength; i++) {
        var searchNum = n - this._inputArr[i];

        for (var j = 0; j < arrayLength; j++) {
          if (searchNum === this._inputArr[j]) {
            return [i, j];
          }
        }
      }
    }
  }, {
    key: 'sumX2',
    value: function sumX2(n) {
      // Hash Map solution. Time complexity is O(n).
      // Can bew done in one iteration if you know the maximum element in the array.

      var arrayLength = this._inputArr.length;
      var map = new Map();
      for (var i = 0; i < arrayLength; i++) {
        map.set(n - inputArr[i], true);
      }

      for (var j = 0; j < arrayLength; j++) {
        if (map.has(inputArr[j])) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'majorityElement1',
    value: function majorityElement1() {
      var arrayLength = this._inputArr.length,
          map = new Map(),
          MAX = 0;

      for (var i = 0; i < arrayLength; i++) {
        if (map.has(this._inputArr[i])) {
          var value = map.get(this._inputArr[i]);
          map.set(this._inputArr[i], value++);
        } else {
          map.set(this._inputArr[i], 0);
        }
      }

      for (var _value in map.values()) {
        console.log(_value);
        if (_value > MAX) {
          MAX = _value;
        }
      }

      return MAX;
    }
  }]);

  return ArrayAlgorithms;
}();

var inputArr = [13, 3, 9, 3, 8, 11, 17];
var rm = new ArrayAlgorithms(inputArr);
console.log(rm.majorityElement1(inputArr));

//# sourceMappingURL=Arrays-compiled.js.map