'use strict';

/* Strings in JavaScript are immutable. They should be modified using string methods or first should be converted 
  into string array. 
*/
class StringAlgorithms {
  constructor() {
    // do nothing
  }

  allPermutations(str) {
    // Declare an arraylist of permutations
    let allPermutations = [ ];
    // base case
    if (str.length === 0) {
      allPermutations.push('');
    }
    else {
      let firstChar = str.charAt(0);
      let remainingChars = str.substring(1);
      // call recursively to find the permutations of the remaining chars
      let remainingPerms = this.allPermutations(remainingChars);
      // append the first char to the remaining permutations

      allPermutations = remainingPerms.forEach(function(item, index, array) {
        let newItemArray = [ ];
        for (let j = 0; j < item.length; j++) {
          newItemArray.push(this.insertCharAt(item, firstChar, j));
        }
        return newItemArray;
      });  
    }

    return allPermutations;
  }

  insertCharAt(item, firstChar, position) {
    return item.substring(0, position) + firstChar + item.substring(position);
  }

  reverseAString(str) {
    let strArray = str.split('');
    for (let i = 0, j = strArray.length - 1; i <= j; i++, j--) {
      let temp = strArray[i];
      strArray[i] = strArray[j];
      strArray[j] = temp;
    }
    return strArray.join('');
  }

  isAllUnique(str) {
    let charArr = [ ];
    charArr.fill(false);

    const strlen = str.length;
    if (strlen > 128) {
      return false;
    }

    for (let i = 0; i < strlen; i++) {
      if (charArr[str.charCodeAt(i)]) {
        return false
      }
      charArr[str.charCodeAt(i)] = true;
    }

    return true;
  }

  isStringPermutation(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    else {
      let strArr1 = str1.split(''),
        strArr2 = str2.split('');  

      if (strArr1.sort().join('') === strArr2.sort().join('')) {
        return true
      }
    }

    return false;
  }

  // Replace all the spaces in string with %20. Use char array
  URLify(str) {
    let strArray = str.split(''),
      spaceCount = 0,
      strlen = strArray.length;

    // count the number of spaces
    for (let i = 0; i < strlen; i++) {
      if (strArray[i] === ' ') {
        spaceCount++;
      }
    }
    let newStrlen = strlen + spaceCount * 2, 
      newStrArray = new Array(newStrlen);

    while(strlen > 0) {
      if (strArray[--strlen] !== ' ') {
        newStrArray[--newStrlen] = strArray[strlen];
      }
      else {
        newStrArray[--newStrlen] = '0';
        newStrArray[--newStrlen] = '2';
        newStrArray[--newStrlen] = '%';
      }
    }

    return newStrArray.join('');
  }

  // generate all strings of length n drawn from 0... k-1
  // Assume global array. No need to pass array in each recursive call.

  generateAllStrings(n, k) {
    if (n < 1) {
      console.log(arr);
      return;
    }
    for (let i = 0; i < k; i++) {
      arr[n - 1] = i;
      this.generateAllStrings(n - 1, k);
    }
  }

  // Generate all strings of n bits
  generateAllNBitStrings(n) {
    if (n < 1) {
      console.log(arr);
      return;
    }
    arr[n-1] = 0;
    this.generateAllNBitStrings(n-1);
    arr[n-1] = 1;
    this.generateAllNBitStrings(n-1);
  }

  sparseSearch(str, arr, l, r) {
    let mid = (l + r) / 2;
    if (arr[mid] !== "") {
      if (str.localCompare(arr[mid] === 0)) {
        return mid;
      }
      if (str.localCompare(arr[mid]) > 0) {
        this.sparseSearch(str, arr, mid + 1, r);
      }
      else {
        this.sparseSearch(str, arr, 0, mid - 1);
      }
    }
    else {
      let leftptr = mid - 1,
        rightptr = mid + 1;

      while(arr[leftptr] === "" && rightptr === "") {
        leftptr--;
        rightptr++;
      }
      if (leftptr !== "") {
        mid = leftptr;
      else  if (rightptr !== "") {
        mid = rightptr;
      }
    }

    if (str.localCompare(arr[mid]) > 0) {
      this.sparseSearch(str, arr, mid + 1, r);
    }
    else {
      this.sparseSearch(str, arr, 0, mid - 1);
    }
  }
}


let stringAlgos = new StringAlgorithms();
const arr = new Array(3);
stringAlgos.generateAllNBitStrings(3);

