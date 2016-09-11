'use strict';

/* Strings in JavaScript are immutable. They should be modified using string methods or first should be converted 
  into string array. 
*/

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringAlgorithms = function () {
  function StringAlgorithms() {
    // do nothing

    _classCallCheck(this, StringAlgorithms);
  }

  _createClass(StringAlgorithms, [{
    key: 'allPermutations',
    value: function allPermutations(str) {
      var _this = this;

      // Declare an arraylist of permutations
      var allPermutations = [];
      // base case
      if (str.length === 0) {
        allPermutations.push('');
      } else {
        (function () {
          var firstChar = str.charAt(0);
          var remainingChars = str.substring(1);
          // call recursively to find the permutations of the remaining chars
          var remainingPerms = _this.allPermutations(remainingChars);
          // append the first char to the remaining permutations

          allPermutations = remainingPerms.forEach(function (item, index, array) {
            var newItemArray = [];
            for (var j = 0; j < item.length; j++) {
              newItemArray.push(this.insertCharAt(item, firstChar, j));
            }
            return newItemArray;
          });
        })();
      }

      return allPermutations;
    }
  }, {
    key: 'insertCharAt',
    value: function insertCharAt(item, firstChar, position) {
      return item.substring(0, position) + firstChar + item.substring(position);
    }
  }, {
    key: 'reverseAString',
    value: function reverseAString(str) {
      var strArray = str.split('');
      for (var i = 0, j = strArray.length - 1; i <= j; i++, j--) {
        var temp = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = temp;
      }
      return strArray.join('');
    }
  }, {
    key: 'isAllUnique',
    value: function isAllUnique(str) {
      var charArr = [];
      charArr.fill(false);

      var strlen = str.length;
      if (strlen > 128) {
        return false;
      }

      for (var i = 0; i < strlen; i++) {
        if (charArr[str.charCodeAt(i)]) {
          return false;
        }
        charArr[str.charCodeAt(i)] = true;
      }

      return true;
    }
  }, {
    key: 'isStringPermutation',
    value: function isStringPermutation(str1, str2) {
      if (str1.length !== str2.length) {
        return false;
      } else {
        var strArr1 = str1.split(''),
            strArr2 = str2.split('');

        if (strArr1.sort().join('') === strArr2.sort().join('')) {
          return true;
        }
      }

      return false;
    }

    // Replace all the spaces in string with %20. Use char array

  }, {
    key: 'URLify',
    value: function URLify(str) {
      var strArray = str.split(''),
          spaceCount = 0,
          strlen = strArray.length;

      // count the number of spaces
      for (var i = 0; i < strlen; i++) {
        if (strArray[i] === ' ') {
          spaceCount++;
        }
      }
      var newStrlen = strlen + spaceCount * 2,
          newStrArray = new Array(newStrlen);

      while (strlen > 0) {
        if (strArray[--strlen] !== ' ') {
          newStrArray[--newStrlen] = strArray[strlen];
        } else {
          newStrArray[--newStrlen] = '0';
          newStrArray[--newStrlen] = '2';
          newStrArray[--newStrlen] = '%';
        }
      }

      return newStrArray.join('');
    }

    // generate all strings of length n drawn from 0... k-1
    // Assume global array. No need to pass array in each recursive call.

  }, {
    key: 'generateAllStrings',
    value: function generateAllStrings(n, k) {
      if (n < 1) {
        console.log(arr);
        return;
      }
      for (var i = 0; i < k; i++) {
        arr[n - 1] = i;
        this.generateAllStrings(n - 1, k);
      }
    }

    // Generate all strings of n bits

  }, {
    key: 'generateAllNBitStrings',
    value: function generateAllNBitStrings(n) {
      if (n < 1) {
        console.log(arr);
        return;
      }
      arr[n - 1] = 0;
      this.generateAllNBitStrings(n - 1);
      arr[n - 1] = 1;
      this.generateAllNBitStrings(n - 1);
    }
  }]);

  return StringAlgorithms;
}();

var stringAlgos = new StringAlgorithms();
var arr = new Array(3);
console.log(stringAlgos.generateAllNBitStrings(3));
