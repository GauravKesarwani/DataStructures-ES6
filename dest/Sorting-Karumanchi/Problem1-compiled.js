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

var Problem1 = function () {
  function Problem1() {
    _classCallCheck(this, Problem1);
  }

  _createClass(Problem1, null, [{
    key: 'findRepetion',
    value: function findRepetion(arr) {
      arr.sort(function (a, b) {
        return a - b;
      });

      for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
          return true;
        }
      }
      return false;
    }
  }]);

  return Problem1;
}();

if (Problem1.findRepetion([23, 12, 18, 9, 10, 12])) {
  console.log('Array has repetition');
} else {
  console.log('Array does not have repetition');
}

//# sourceMappingURL=Problem1-compiled.js.map