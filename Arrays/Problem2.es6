'use strict';
  /* Given a matrix with distinct values find pair with given sum such that elements of the pair are in different rows */

class PairsWithGivenSum {
  
/*	
	Using Hashing
*/
  solution1(arr) {
  	const hm = new Map();
  	
  	
  }

  copy(obj) {
	  var copy = Object.create(Object.getPrototypeOf(obj));
	  var propNames = Object.getOwnPropertyNames(obj);

	  propNames.forEach(function(name) {
	    var desc = Object.getOwnPropertyDescriptor(obj, name);
      console.log('Property Descriptors ', desc);
	    Object.defineProperty(copy, name, desc);
	  });

	  return copy;
	}
}

const inputArr = [
	[ 2, 5, 4, 9 ],
	[ 8, 11, 1, 3 ],
	[ 6, 9, 12, 10 ],
	[ 0, 7, 13, 15 ]
];

const pairsWithGivenSum = new PairsWithGivenSum();
pairsWithGivenSum.solution1(inputArr);

let obj1 = { a: '1', b: '2'};
let copiedObject = pairsWithGivenSum.copy(obj1);
console.log('Copied Object', copiedObject);