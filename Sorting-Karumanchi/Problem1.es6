'use strict';

class Problem1 {
  static findRepetion(arr) {
    arr.sort(function(a , b) {
      return a - b;
    });

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i+1]) {
       return true;
      }
    }
    return false;
  }
}

if (Problem1.findRepetion([23, 12, 18, 9, 10, 12])) {
  console.log('Array has repetition');
}
else {
  console.log('Array does not have repetition');
}