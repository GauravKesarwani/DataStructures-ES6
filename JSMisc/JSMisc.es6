'use strict';

class JSMisc {
	constructor() {

	}

	// Deep clone an object in javascript
	deepClone(obj) {
		if (obj !== null || typeof obj !== 'object') {
			return obj;
		} else {
			let temp;
			for (key in obj) {
				temp[key] = this.deepClone(obj[key]);
			}

			return temp;
		}
	}
}

let bill = {
	name: 'Bill',
	age: 32
}

let jsMisc = new JSMisc();
let bob = jsMisc.deepClone(bill);
console.log(bill);
bob.name = 'Bob';
console.log(bob);