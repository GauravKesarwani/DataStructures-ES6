'use strict';

/*
	Limitations: 
	1. Nested Objects. What if one of the values is itself an object.
	2. If one of the property values is not a number. Only value in javascript that is not equal to itself.
	3. If one object has a property with value undefined, while another object doesn't have the property (which thus evaluates as undefined). Btw, you can solve this problem by using hasOwnProperty

*/ 
class MiscJs {
	constructor(a, b) {
		this._a = a;
		this._b = b;
	};

	// 1. Compare two Javascript objects.
	compareTwoObjects() {
		let aProps = Object.getOwnPropertyNames(this._a);
		let bProps = Object.getOwnPropertyNames(this._b);

		if (aProps.length !== bProps.length) {
			return false;
		}

		for (let i = 0; i < aProps.length; i++) {
			if (this._a[aProps[i]] !== this._b[aProps[i]]) {
				return false;
			}
		}

		return true;
 	}

 	// 2. Code a solution to find a set of words in a text

 	findSetOfWords(str, arr) {
 		let words = new Set(arr);
 		let output = new Set();

 		words.forEach(function(value) {
 			var result = str.match(/value/g);
 			output.add(result);
 		});

 		return output;
 	} 

}

let a = { a: 1, c: 4, b: 7};
let b = { a: 1, b: 4, c: 7};
console.log(new MiscJs(a, b).compareTwoObjects());

// Code a solution to find a set of words in some text

var myRe = /d(b+)d/g;
var myArray = "cdbbdbsbzdbbd".match(/d(b+)d/g);
console.log('myArray', myArray);

console.log(new MiscJs().findSetOfWords("Gaurav is a good good Gaurav boy is a boy", ['boy', 'good']));

