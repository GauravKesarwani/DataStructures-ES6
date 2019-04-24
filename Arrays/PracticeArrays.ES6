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

  findMaxInArray(arr, left, right) {
    let max = 0;
    for (let index = left; index <= right; index++) {
      if (arr[index] > max) {
        max = arr[index];
      }
    }
    return max;
  }

  //Given an elevation map, compute how much water it is able to trap after raining.
  trappedRainWater(inputArr) {
    const arrlen = inputArr.length;
    let waterTrapped = 0;
    for (let i = 1; i < inputArr.length-1; i++) {
      const left = this.findMaxInArray(inputArr, 0, i-1);
      const right = this.findMaxInArray(inputArr, i+1, arrlen - 1);
           
      const maxElevation = Math.min(left, right);
      waterTrapped+= maxElevation - inputArr[i];
    }
    return waterTrapped;
  }

  multiplyStrings(str1, str2) {
    let result = str1 * str2;
    console.log('result', result);
  }

  findNthElementOfASpiralMatrix(inputMatrix, rows, cols, k) {
    let result = [ ];
    for (let outer = 0; outer < rows; outer++) {
      if (outer % 2 === 0) {
        for (let inner = 0; inner < cols; inner++) {
           result.push(inputMatrix[outer][inner]); 
        }
      }
      else {
        for (let inner = cols -1; inner >=0; inner--) {
          result.push(inputMatrix[outer][inner]);
        }
      }
      console.log(result);
    }

    return result[k-1];
  }
}

let arrayAlgo = new Arrays();

let inputMatrix = [ [ 1, 2, 3, 5], [ 7, 8, 12, 4 ], [ 8, 11, 19, 11 ]];
console.log(arrayAlgo.findNthElementOfASpiralMatrix(inputMatrix, 3, 4, 5));


