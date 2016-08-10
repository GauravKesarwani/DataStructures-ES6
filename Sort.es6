'use strict';

class Sort {
  constructor() {

  }
  static bubbleSort(arr) {
    for (let outer = arr.length - 1; outer > 0; outer--) {
      for (let inner = 0; inner < outer; inner++) {
        if (arr[inner] > arr[inner+1]) {
          let temp = arr[inner];
          arr[inner] = arr[inner+1];
          arr[inner+1] = temp;
        }
      }
    }

    return arr;
  }
}

var arr = [13, 4, 11, 9, 23, 8, 19];
var result = Sort.bubbleSort(arr);
console.log(result);

