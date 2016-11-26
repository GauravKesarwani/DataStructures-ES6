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
    let hash = { };     // ES6 now has Map(). 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

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

  peaksAndValleys(arr) {
    arr.sort(function(a,b) { return a - b; });
    for (let i = 1; i < arr.length; i+=2) {
      let temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
    }

    return arr;
  }

  peaksAndValleys2(arr) {
    for (let i = 1; i < arr.length; i+=2) {
      const maxIndex = this.findMaxIndex(arr, i - 1, i, i + 1);
      let temp = arr[maxIndex];
      arr[maxIndex] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

  findMaxIndex(arr, i, j, k) {
    let length = arr.length;
    let aValue = i >=0 && i < length ? arr[i] : Number.MIN_VALUE;
    let bValue = j >=0 && j < length ? arr[j] : Number.MIN_VALUE;
    let cValue = k >=0 && k < length ? arr[k] : Number.MIN_VALUE;
    const max = Math.max(aValue, bValue, cValue);
    if (max === aValue) {
      return i;
    } else if (max === bValue) {
      return j;
    } else {
      return k;
    }
  }

  searchInRotatedArray(arr, left, right, item) {
    let mid = (left + right) / 2;
    if (arr[mid] === item) {
      return mid;
    } else if (right < left) {
      return -1;
      // left half is sorted
    } 

    if (arr[left] < arr[mid]){      //left is normally ordered
      if (item >= arr[left] && item < arr[mid]) {
        //search the left half
        return this.searchInRotatedArray(arr,left, mid -1, item);
      } else {
        return this.searchInRotatedArray(arr, mid + 1, right, item);
      }
    } else if (arr[mid] < arr[right]) {   // right is normally ordered
      if (item > arr[mid] && item <= arr[right]) {
        return this.searchInRotatedArray(arr, mid + 1, right,item);
      } else {
        return this.searchInRotatedArray(arr, left, mid - 1, item);
      }
    } else if (arr[left] === arr[mid]) {    //left half is all repeats
      if (arr[mid] !== arr[right]) {
        return this.searchInRotatedArray(arr, mid + 1, right, item);
      } else {  // we have to search both the halves

      }
    }
  }

  sumClosestToZero() {
    
  }
}

let s = new Searching([2, 3, 7, 17, 19, 0, 10, 5, 11]);
console.log(s.peaksAndValleys2([4, 1, 0, 9, 8, 7]));
