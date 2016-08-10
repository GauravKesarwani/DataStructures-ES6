'use strict';

class Problem4 {
  static checkWhoWinsTheElection(arr) {
    let counter = 0,
      candidate = arr[0],
      maxCounter = 0,
      winner;
    arr.sort(function (a, b) {
      return a - b;
    });

    for (let i = 0; i < arr.length; i++) {
      if(candidate == arr[i]) {
        counter++;
      }
      else {
        candidate = arr[i];
      }

      if (maxCounter < counter) {
        maxCounter = counter;
        winner = candidate;
      }
    }

    return winner;
  }
}

console.log(Problem4.checkWhoWinsTheElection([24, 10, 12, 18, 9, 10, 12, 12, 2]))
