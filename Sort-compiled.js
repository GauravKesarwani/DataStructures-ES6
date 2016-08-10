'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sort = function () {
  function Sort() {
    _classCallCheck(this, Sort);
  }

  _createClass(Sort, null, [{
    key: 'bubbleSort',
    value: function bubbleSort(arr) {
      for (var outer = arr.length - 1; outer > 0; outer--) {
        for (var inner = 0; inner < outer; inner++) {
          if (arr[inner] > arr[inner + 1]) {
            var temp = arr[inner];
            arr[inner] = arr[inner + 1];
            arr[inner + 1] = temp;
          }
        }
      }

      return arr;
    }
  }]);

  return Sort;
}();

var arr = [13, 4, 11, 9, 23, 8, 19];
var result = Sort.bubbleSort(arr);
console.log(result);

//# sourceMappingURL=Sort-compiled.js.map