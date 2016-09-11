'use strict';

// Don't forget to use default parameter values.

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fibonacci = function () {
	function Fibonacci(n) {
		_classCallCheck(this, Fibonacci);

		this.fibSeries = new Array(n);
	}

	// calculate the fibonacci of a number using bottom up approach.


	_createClass(Fibonacci, [{
		key: 'calculateFibonacciBottomUp',
		value: function calculateFibonacciBottomUp(n) {
			var fibSeries = new Array(n);
			fibSeries[0] = 0;
			fibSeries[1] = 1;
			for (var i = 2; i < n; i++) {
				fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
			}

			return fibSeries[n - 1];
		}
	}, {
		key: 'calculateFibonacciTopDown',
		value: function calculateFibonacciTopDown(n) {
			if (n <= 0) {
				return 0;
			} else if (n === 1) {
				return 1;
			}

			if (this.fibSeries[n - 1] !== undefined) {
				console.log(this.fibSeries[n - 1]);
				return this.fibSeries[n - 1];
			}

			this.fibSeries[n - 1] = this.calculateFibonacciTopDown(n - 2) + this.calculateFibonacciTopDown(n - 3);
			return this.fibSeries[n - 1];
		}
	}, {
		key: 'maximumValueContinuousSequence',
		value: function maximumValueContinuousSequence(arr) {}
	}]);

	return Fibonacci;
}();

var fibonacci = new Fibonacci(5);
console.log(fibonacci.calculateFibonacciTopDown(5));