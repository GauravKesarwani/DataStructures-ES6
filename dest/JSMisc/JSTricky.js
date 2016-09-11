'use strict';

var monica = {
	name: 'Monica',
	total: 400,
	deductMonthlyFee: function deductMonthlyFee(fee) {
		this.total = this.total - fee;
	}
};

var racheal = {
	name: 'Racheal',
	total: 1500
};

var rachealFeeDeductor = monica.deductMonthlyFee.bind(racheal, 200);

rachealFeeDeductor();

/*  Shim an older browser for bind functionality //
 	Remember: In JavaScript functions are objects & can have methods and properties 
*/

Function.prototype.bind = Function.prototype.bind || function (context) {
	var self = this;
	return function () {
		return self.apply(context, arguments);
	};
};

function TestArguments() {
	var args = Array.prototype.slice.call(arguments);
	console.log(args);

	for (var i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
		if (arguments[i] === 2) {
			return true;
		}
	}
	return false;
}

var arrayNums = [7, 10, 8, 14, 89, 10, 11];
var maxNum = Math.max.apply(null, arrayNums);

// ES6
var maxNumber = Math.max.apply(Math, arrayNums);
console.log('Maximum Number', maxNum);
console.log('Maximum Number', maxNumber);