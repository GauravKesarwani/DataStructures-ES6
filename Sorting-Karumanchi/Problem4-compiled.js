'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Problem4 = function () {
  function Problem4() {
    _classCallCheck(this, Problem4);
  }

  _createClass(Problem4, null, [{
    key: 'checkWhoWinsTheElection',
    value: function checkWhoWinsTheElection(arr) {
      var counter = 0,
          candidate = arr[0],
          maxCounter = 0,
          winner = void 0;
      arr.sort(function (a, b) {
        return a - b;
      });

      for (var i = 0; i < arr.length; i++) {
        if (candidate == arr[i]) {
          counter++;
        } else {
          candidate = arr[i];
        }

        if (maxCounter < counter) {
          maxCounter = counter;
          winner = candidate;
        }
      }

      return winner;
    }
  }]);

  return Problem4;
}();

console.log(Problem4.checkWhoWinsTheElection([24, 10, 12, 18, 9, 10, 12, 12, 2]));

//# sourceMappingURL=Problem4-compiled.js.map