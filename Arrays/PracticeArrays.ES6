'use strict';

class Arrays {
  constructor() {

  }

  allUnique(str) {
    let charCodes = new Array(128);

    // optimization
    if (str.length > 128) {
      return false;
    }

    for (let i = 0; i < str.length; i++) {
      if (charCodes[str.charCodeAt(i)]) {
        return false;
      }
    }
    return true;
  }

  isPermutation(str1, str2) {vplit('').sort().join('')) {
      return true;
   }
    else {
     return false;
   }
  }

  isStringRotation(s1, s2) {
    if (s1.length === 0 || s1.length !== s2.length) {
      return false;
    }

    if (this.isSubString(s2, s1 + s1)) {
      return true;
    }
    else {
      return false;
    }
  }

  isSubString(str1, str2) {
    if (str2.includes(str1, 0)) {
      return true;
    }
    else {
      return false;
    }
  }
}

let arrayAlgo = new Arrays();

console.log(arrayAlgo.isStringRotation("waterbottle", "tltewaterbo"));
