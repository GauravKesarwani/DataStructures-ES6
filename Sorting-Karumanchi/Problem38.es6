/* Remove Duplicates from an array in place. */

'use strict';

class RemoveDuplicates {
  static removeDuplicates(arr) {
    let i = 0,
      j = 0;
    while(j < arr.length) {
      if (arr[i] === arr[j]) {
        j++;
      }
      else {
        arr[++i] = arr[j];
        i++;
        j++;
      }
    }

    return arr;
  }
}


let arr = [ 12, 12, 12, 14, 14, 14, 15, 16, 16, 17];
let a = RemoveDuplicates.removeDuplicates(arr);
console.log(a);
