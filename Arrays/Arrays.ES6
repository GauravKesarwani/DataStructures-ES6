'use strict';

var winston = require('winston');

class ArrayAlgorithms {
  constructor(inputArr) {
    this._inputArr = inputArr;
    this._outputArr = [ ];
    this.longestIncreasingSequence = 0;
  }

  removeDuplicates() {
    let arrayLength = this._inputArr.length;

    this._outputArr.push(this._inputArr[0]);
    for (let i = 1; i < arrayLength; i++) {
      let j = i - 1;

      while(j >= 0) {
        if(this._inputArr[j] === this._inputArr[i]) {
          break;
        }
        j--;
      }

      if (j === -1) {
        this._outputArr.push(this._inputArr[i]);
      }
    }
    return this._outputArr;
  }

  sumX(n) {
    // Brute force solution
    let arrayLength = this._inputArr.length;
    for (let i = 0; i < arrayLength; i++) {
      let searchNum = n - this._inputArr[i];

      for (let j = 0; j < arrayLength; j++) {
        if (searchNum === this._inputArr[j]) {
          return [i ,j];
        }
      }
    }
  }

  sumX2(n) {
    // Hash Map solution. Time complexity is O(n).
    // Can bew done in one iteration if you know the maximum element in the array.

    let arrayLength = this._inputArr.length;
    let map = new Map();
    for (let i = 0; i < arrayLength; i++) {
      map.set(n - inputArr[i], true);
    }

    for (let j = 0; j < arrayLength; j++) {
      if (map.has(inputArr[j])) {
        return true;
      }
    }
    return false;
  }

  majorityElement1() {
    let arrayLength = this._inputArr.length,
      map = new Map(),
      MAX = 0;

    for (let i = 0; i < arrayLength; i++) {
      if (map.has(this._inputArr[i])) {
        let value = map.get(this._inputArr[i]);
        map.set(this._inputArr[i], value++);
      }
      else {
        map.set(this._inputArr[i], 0);
      }
    }

    for (let value in map.values()) {
      console.log(value);
      if (value > MAX) {
        MAX = value;
      }
    }

    return MAX;
  }

  /* Find whether an element exists in the array such that number of smaller elements is equal to the number of greater elements.
     Space complexity = O(n)
     Time complexity = O(n)
  */

  findMidPoint() {
    let len = this._inputArr.length,
      auxArray = [ ];
    for (let index = 0; index < len; index++) {
      if (!auxArray.includes(this._inputArr[index])) {
        auxArray.push(this._inputArr[index]);
      }
    }

    if (auxArray.length % 2 === 0) {
      winston.log('info', 'Equal point does not exist...');
      return -1;
    }
    return auxArray[Math.floor(auxArray.length / 2)];
  }

  /* Count number of occurrences in a sorted array */
  countNumberOfOccurrencesInSortedArray(num) {
    let counter = 0;
    let arrlen = this._inputArr.length;

    for (let index = 0; index < arrlen; index++) {
      if (this._inputArr[index] > num) {
        break;
      }
      else if (this._inputArr[index] === num) {
        counter++;
      }
    }

    return counter;
  }

  /*
    You are given an array A containing 2*N+2 positive numbers, out of which N numbers are repeated
    exactly twice and the other two numbers occur exactly once and are distinct.
    You need to find the other two numbers and print them in ascending order.
  */
  findNumbers(arr) {
    let distNums = new Set();
    arr.map(function(value, index, arr) {
      if(distNums.has(value)) {
        distNums.delete(value);
      }
       else {
        distNums.add(value);
      }
    });
    const result = Array.from(distNums).sort();
    return result.toString();
  }

  mergeSortedArrays(nums1, nums2) {
    var ptr1 = 0, ptr2 = 0, index = 0;
    var result = [ ];
    while (ptr1 < nums1.length && ptr2 < nums2.length) {
      if (nums1[ptr1] <= nums2[ptr2]) {
        result[index] = nums1[ptr1];
        ptr1++;
      }
      else {
        (nums1[ptr1] > nums2[ptr2])
        result[index] = nums2[ptr2];
        ptr2++;
      }
      index++;
    }

    if (ptr1 < nums1.length) {
      while (ptr1 < nums1.length) {
        result[index] = nums1[ptr1];
        index++;
        ptr1++;
      }
    }
    if (ptr2 < nums2.length) {
      while (ptr2 < nums2.length) {
        result[index] = nums2[ptr2];
        index++;
        ptr2++;
      }
    }
    console.log(result);
    return result;
  }

  // find the median of two arrays
  findMedian(nums1, nums2) {
    let mergedArray = this.mergeSortedArrays(nums1, nums2);
    let median;
    let arrlen = mergedArray.length;
    if (arrlen % 2 === 0) {
      median = (mergedArray[arrlen/2 - 1]  + mergedArray[arrlen/2])/2;
    }
    else {
      median = mergedArray[Math.ceil(arrlen/2 - 1)];
    }

    return median;
  }

  // find longest increasing subsequence in an array
  findLongestIncreasingSequence(arr, n) {
    // base case
    if (n === 0 || n === 1) {
      return 1;
    }

    let maxSubsequence = 0;    // this denotes the length of arr[n-1] the element which is 1
    for (let index = 0; index < n-1; index++) {
      // find the length of LIS ending at index
      let currentSubSequenceLength = this.findLongestIncreasingSequence(arr, index);
      if ((arr[n-1] > arr[index]) && (currentSubSequenceLength + 1 > maxSubsequence)) {
        maxSubsequence = currentSubSequenceLength + 1;
      }
    }
    if (maxSubsequence > this.longestIncreasingSequence) {
      this.longestIncreasingSequence = maxSubsequence;
    }
    return maxSubsequence;
  }

  findLongestIncreasingSequenceDP(arr) {
    // Initialize the max LIS array
    let max = 0;
    let lis = new Array(arr.length);
    lis.fill(1);
    for (let outer = 1; outer < arr.length; outer++) {
      let currentMaxLis = 1;
      for (let inner = 0; inner < outer; inner++) {
        if ((arr[outer] > arr[inner]) && lis[inner] + 1 > currentMaxLis ) {
          currentMaxLis = lis[inner] + 1;
        }
      }
     lis[outer] = currentMaxLis;
    }

    return Math.max(...lis);
  }
}


let arr1 = [ 10, 22, 9, 33, 21, 50, 41, 60 ];
//let arr2 = [ 3, 9, 14, 19, 29, 31 ];

let instance = new ArrayAlgorithms();
winston.log('info', instance.findLongestIncreasingSequenceDP(arr1, 8));
winston.log('info', instance.longestIncreasingSequence);
