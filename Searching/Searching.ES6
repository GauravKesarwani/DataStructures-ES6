/*
 *
 *  * Copyright (c) 2016. All rights reserved
 *  *
 *  * DataStructures in JavaScript using ES6 Standard.
 *  * @author: Gaurav Kesarwani
 *
 */

/* Separate Even and Odd Numbers */
'use strict';

class Searching {
  constructor(arr) {
    this.arr = arr;
  };

  separateEvenAndOdd() {
    let start = 0,
      end = this.arr.length - 1;

    while(start < end) {
      while(this.arr[start] % 2 == 0) {
        start++;
      }
      while(this.arr[end] % 2 == 1) {
        end--;
      }

      if (start < end) { this.swap(start, end); }

      start++;
      end--;
    }

    return this.arr;
  };

  swap(i, j) {
    let temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  };

  separateZeroAndOne() {
    let leftptr = 0,
      rightptr = this.arr.length - 1;

    while(leftptr < rightptr) {
      while(this.arr[leftptr] === 0) {
        leftptr++;
      }

      while(this.arr[rightptr] === 1) {
        rightptr--;
      }

      if (leftptr < rightptr) {
        this.swap(leftptr, rightptr);
      }

    }

    return this.arr;
  };

  sumEqualsK(sum) {
    let arrLen = this.arr.length;
    for (let i = 0; i < arrLen; i++) {
      for (let j = i + 1; j < arrLen; j++) {
        if( this.arr[j] === sum - this.arr[i]) {
          return [i,j]
        }
      }
    }
    return [];
  };

  // Good one.
  sumEqualsK2(sum) {
    let hash = { };

    for (let i = 0; i < this.arr.length; i++) {
      if (hash[this.arr[i]]) {
        return [i, hash[this.arr[i]]]
      }
      else {
        hash[sum -this.arr[i]] = i;
      }
    }

    return [];
  }
}

let s = new Searching([2, 3, 7, 17, 19, 0, 10, 5, 11]);
console.log(s.sumEqualsK2(20));
