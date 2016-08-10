'use strict';

class ArrayAlgorithms {
  constructor(inputArr) {
    this._inputArr = inputArr;
    this._outputArr = [ ];
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
  };

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
  };

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
  };

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
}

let inputArr = [13, 3, 9, 3, 8, 11, 17];
let rm = new ArrayAlgorithms(inputArr);
console.log(rm.majorityElement1(inputArr));
