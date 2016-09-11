/* Remove Duplicates from an array in place. */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RemoveDuplicates = function () {
  function RemoveDuplicates() {
    _classCallCheck(this, RemoveDuplicates);
  }

  _createClass(RemoveDuplicates, null, [{
    key: 'removeDuplicates',
    value: function removeDuplicates(arr) {
      var i = 0,
          j = 0;
      while (j < arr.length) {
        if (arr[i] === arr[j]) {
          j++;
        } else {
          arr[++i] = arr[j];
          i++;
          j++;
        }
      }

      return arr;
    }
  }]);

  return RemoveDuplicates;
}();

var arr = [12, 12, 12, 14, 14, 14, 15, 16, 16, 17];
var a = RemoveDuplicates.removeDuplicates(arr);
console.log(a);