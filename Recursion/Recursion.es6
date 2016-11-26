'use strict';

class RecursionProblems {
	towersOfHanoi(n, src, aux, dest) {
		if (n === 1) {
			console.log('Move disc from ' + src + ' to ' + dest);
			return;
		}

		this.towersOfHanoi(n - 1, src, dest, aux);
		this.towersOfHanoi(1, src, aux, dest);
		this.towersOfHanoi(n - 1, aux, src, dest);
	}

	isArraySorted(arr, i) {
		if (i === arr.length - 1) {
			return true;
		} else  {
			let result = (arr[i] > arr[i+1]) ? false : this.isArraySorted(arr, i+1);
			return result;
		} 
	}

	// Generate all strings of n bits
	
	generateAllStrings(arr, n) {
		if (n < 1) {
			console.log(arr.join(''));
			return;
		}
		arr[n - 1] = 0;
		this.generateAllStrings(arr, n - 1);
		arr[n - 1] = 1;
		this.generateAllStrings(arr, n - 1);	
	}
}

let recursionProblems = new RecursionProblems();

let arr = new Array(4);
let result = recursionProblems.generateAllStrings(arr, 4);
console.log(result);