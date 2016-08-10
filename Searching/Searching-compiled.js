/*
 *
 *  * Copyright (c) 2016. All rights reserved
 *  *
 *  * DataStructures in JavaScript using ES6 Standard.
 *  * @author: Gaurav Kesarwani
 *
 */

/* Separate Even and Odd Numbers */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Searching = function () {
  function Searching(arr) {
    _classCallCheck(this, Searching);

    this.arr = arr;
  }

  _createClass(Searching, [{
    key: 'separateEvenAndOdd',
    value: function separateEvenAndOdd() {
      var start = 0,
          end = this.arr.length - 1;

      while (start < end) {
        while (this.arr[start] % 2 == 0) {
          start++;
        }
        while (this.arr[end] % 2 == 1) {
          end--;
        }

        if (start < end) {
          this.swap(start, end);
        }

        start++;
        end--;
      }

      return this.arr;
    }
  }, {
    key: 'swap',
    value: function swap(i, j) {
      var temp = this.arr[i];
      this.arr[i] = this.arr[j];
      this.arr[j] = temp;
    }
  }, {
    key: 'separateZeroAndOne',
    value: function separateZeroAndOne() {
      var leftptr = 0,
          rightptr = this.arr.length - 1;

      while (leftptr < rightptr) {
        while (this.arr[leftptr] === 0) {
          leftptr++;
        }

        while (this.arr[rightptr] === 1) {
          rightptr--;
        }

        if (leftptr < rightptr) {
          this.swap(leftptr, rightptr);
        }
      }

      return this.arr;
    }
  }, {
    key: 'sumEqualsK',
    value: function sumEqualsK(sum) {
      var arrLen = this.arr.length;
      for (var i = 0; i < arrLen; i++) {
        for (var j = i + 1; j < arrLen; j++) {
          if (this.arr[j] === sum - this.arr[i]) {
            return [i, j];
          }
        }
      }
      return [];
    }
  }, {
    key: 'sumEqualsK2',


    // Good one.
    value: function sumEqualsK2(sum) {
      var hash = {};

      for (var i = 0; i < this.arr.length; i++) {
        if (hash[this.arr[i]]) {
          return [i, hash[this.arr[i]]];
        } else {
          hash[sum - this.arr[i]] = i;
        }
      }

      return [];
    }
  }]);

  return Searching;
}();

var s = new Searching([2, 3, 7, 17, 19, 0, 10, 5, 11]);
console.log(s.sumEqualsK2(20));

//# sourceMappingURL=Searching-compiled.js.map