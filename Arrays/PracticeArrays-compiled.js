'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Arrays = function () {
  function Arrays() {
    _classCallCheck(this, Arrays);
  }

  _createClass(Arrays, [{
    key: 'allUnique',
    value: function allUnique(str) {
      var charCodes = new Array(128);

      // optimization
      if (str.length > 128) {
        return false;
      }

      for (var i = 0; i < str.length; i++) {
        if (charCodes[str.charCodeAt(i)]) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'isPermutation',
    value: function isPermutation(str1, str2) {
      if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'isStringRotation',
    value: function isStringRotation(s1, s2) {
      if (s1.length === 0 || s1.length !== s2.length) {
        return false;
      }

      if (this.isSubString(s2, s1 + s1)) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'isSubString',
    value: function isSubString(str1, str2) {
      if (str2.includes(str1, 0)) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Arrays;
}();

var arrayAlgo = new Arrays();

console.log(arrayAlgo.isStringRotation("waterbottle", "tltewaterbo"));

//# sourceMappingURL=PracticeArrays-compiled.js.map