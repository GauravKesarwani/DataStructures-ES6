'use strict';

let memo = [ ];
class DPPrograms {
  constructor() {

  }

  /* Find the nth fibonacci number 
      What is the rumtime of fibonacci. Each node has two children. 
      Total nodes in recursive tree is O(2^n). Exponential runtime
      With dynamic programming the run time reduces to O(n)
  */
  fibonacci(n) {
    if (n === 0 || n === 1) {
      return n;
    } else {
      return fibonacci(n-1) + fibonacci(n-2);
    }
  }

  /* find the nth fibonacci number using Dynamic programming 
    Top Down Approach

    Either you declare the memo globally or you pass it recursively within function
  */
  fib(n) {
    if (n === 0 || n ===1) {
      return n;
    } else if (memo[n] === undefined) {
      memo[n] = fib(n-1) + fib(n-2);
    }

    return memo[n];
  }

  /* Bottom Up Appraoch 
    Todo: You can remove the memo table from below implementation. Think about it. CTCI Page 134
  */

  fib(n) {
    if (n === 0 || n === 1) {
      memo[n] = n;
    } else {
      for(let i = 2; i <= n; i++) {
        memo[i] = memo[i-1] + memo[2];
      }
    }

    return memo[n];
  }

  /** Return all the subsets of a set. Time Complexity is O(2^n) */

  allSubsets(set, index) {
    let allSubsetsList;
    if (index === set.length) {
      allSubsetsList = [ ];
      allSubsetsList.push([]);  // empty Subset
    } else {
      allSubsetsList = this.allSubsets(set, index + 1);
      let item = set[index];
      let moreSubsets = [ ];
      allSubsetsList.forEach(function(currentSubset) {
        let newSubset = currentSubset.concat(item);
        moreSubsets.push(newSubset);
 
      });
      allSubsetsList = allSubsetsList.concat(moreSubsets);
    }

    return allSubsetsList;
  }

  magicIndex(arr, left, right) {
    if (left > right) {
      console.log('Element does not exist in the array');
      return;
    }
    let mid = (left + right) / 2;

    if (arr[mid] === mid) {
      return mid;
    } else if (arr[mid] > mid) {
      this.magicIndex(arr, left , mid - 1);
    } else {
      this.magicIndex(arr, mid + 1, right);
    }
  }

  magicIndexDuplicate() {

  }

  tripleStep() {

  }

  getAllPermutations(str) {
    let allPermutations = [ ];
    if (str.length === 0) {
      allPermutations.push('');
    } else {
      let firstChar = str.charAt(0);
      allPermutations = this.getAllPermutations(str.substring(1));
      const self = this;
      let newPermList = [ ];
      allPermutations.forEach(function(item, index, array) {
        console.log(item);
        for (let j = 0; j <= item.length; j++) {
          let newItem = self.insertCharAt(firstChar, j, item);
          newPermList.push(newItem)
        }
      });

      allPermutations = newPermList;
    }

    return allPermutations;
  }

  insertCharAt(firstChar, pos, item) {
    return item.substring(0, pos) + firstChar + item.substring(pos);
  }
}



let dpprograms = new DPPrograms();
let result = dpprograms.getAllPermutations('cat');
console.log(result);