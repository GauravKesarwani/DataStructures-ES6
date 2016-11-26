'use strict';

// Singleton Pattern Implementation

let instance = null;

class Cache {
	constructor() {
		if (!instance) {
			instance = this;
		}

		this.time = new Date();

		return instance;
	}
}

let cache = new Cache();
console.log(cache.time);

setTimeout(function() {
	let cache = new Cache();
	console.log(cache.time);
}, 4000);