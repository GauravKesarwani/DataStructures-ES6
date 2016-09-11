'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Problem3 = function () {
  function Problem3() {
    _classCallCheck(this, Problem3);
  }

  _createClass(Problem3, null, [{
    key: 'algoWhoWinsElection',
    value: function algoWhoWinsElection(arr) {
      var idMap = {},
          maxCounter = 0,
          winner = void 0;
      for (var i = 0; i < arr.length; i++) {
        if (!idMap.hasOwnProperty(arr[i])) {
          idMap[arr[i]] = 0;
        } else {
          idMap[arr[i]]++;
        }
      }

      for (var prop in idMap) {
        if (maxCounter < idMap[prop]) {
          maxCounter = idMap[prop];
          winner = prop;
        }
      }

      return winner;
    }
  }]);

  return Problem3;
}();

console.log(Problem3.algoWhoWinsElection([12, 10, 9, 10, 12, 12, 8, 1, 12, 9, 0]));