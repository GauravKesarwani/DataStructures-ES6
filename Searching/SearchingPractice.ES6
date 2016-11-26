'use strict';

class SearchingPractice {

  // This can be done in one loop.... Think more.
  sumEqualsK(arr, K) {
    let hm = new Map(),
      len = arr.length;

    if (len < 2) {
      console.log('Less than 2 elements');
      return;
    }  
    for (let i = 0; i < len; i++)  {
      hm.set(arr[i], i);
    }

    for (let j = 0; j < len; j++) {
      if (hm.has(K - arr[j])) {
        console.log(' Two elements exist at indices ', + hm.get(K- arr[j]) + ': ' + j);
        return;
      }
    }
  }

  separateEvenAndOdd(arr) {
    let i = 0,
      len = arr.length, 
      j = arr.length - 1;

    while(i < j) {  
      while(i < len && arr[i] % 2 === 0) {
        i++;
      }

      while(j > 0 && arr[j] % 2 === 1) {
        j--;
      } 
      if (i < j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp; 
      }
    }
    return arr;
  }
}

let sp = new SearchingPractice();
console.log(sp.separateEvenAndOdd([ 10, 12, 11, 19, 3, 4, 2, 1, 8]));