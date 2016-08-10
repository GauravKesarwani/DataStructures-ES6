'use strict';

class Problem3 {
  static algoWhoWinsElection(arr) {
    let idMap = { },
      maxCounter = 0,
      winner;
    for (let i = 0; i < arr.length; i++) {
      if(!idMap.hasOwnProperty(arr[i])) {
        idMap[arr[i]] = 0;
      }
      else {
        idMap[arr[i]]++;
      }
    }

    for(let prop in idMap) {
      if (maxCounter < idMap[prop]) {
        maxCounter = idMap[prop];
        winner = prop;
      }
    }

    return winner;
  }
}

console.log(Problem3.algoWhoWinsElection([ 12, 10, 9, 10, 12, 12, 8, 1, 12, 9, 0]));
