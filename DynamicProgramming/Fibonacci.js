'use strict';

// Don't forget to use default parameter values.
class Fibonacci {
	constructor(n) {
		this.fibSeries = new Array(n);
	}

	// calculate the fibonacci of a number using bottom up approach.
	calculateFibonacciBottomUp(n) {
		let fibSeries = new Array(n);
		fibSeries[0] = 0;
		fibSeries[1] = 1;
		for (let i = 2; i < n; i++) {
			fibSeries[i] = fibSeries[i-1] + fibSeries[i-2];
		}

		return fibSeries[n-1];
	}

	calculateFibonacciTopDown(n) {
		if (n <= 0) {
			return 0;
		} else if(n === 1) {
			return 1;
		}
		
		if (this.fibSeries[n-1] !== undefined) {
			console.log(this.fibSeries[n-1]);
			return this.fibSeries[n-1];
		}

		this.fibSeries[n-1] = this.calculateFibonacciTopDown(n-2) + this.calculateFibonacciTopDown(n-3);
		return this.fibSeries[n-1];
 	}

 	maximumValueContinuousSequence(arr) {
 		
 	}
}

let fibonacci = new Fibonacci(5);
console.log(fibonacci.calculateFibonacciTopDown(5));