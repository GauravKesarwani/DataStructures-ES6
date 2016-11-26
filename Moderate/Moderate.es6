'use strict';

/* Implement a method to compute the year with most number of people alive */

class Person {
	constructor(birthYear, deathYear) {
		this.birthYear = birthYear;
		this.deathYear = deathYear;
	}
}

class ModerateQs {
	constructor() {
		this.liveCount = new Array(101);
		this.liveCount.fill(0);
	}

	validate(listOfPeople) {
		let self = this;
		listOfPeople.forEach(function(person, index, array) {
			for (let i = person.birthYear; i <= person.deathYear; i++) {
				self.liveCount[i - 1900]++;
			}
		});

		let maxAlive = 0,
			maxIndex;
		
		console.log(this.liveCount)
		this.liveCount.forEach(function(value, index, array) {
			if (value > maxAlive) {
				maxAlive = value;
				maxIndex = index;
			}
		});

		return maxIndex + 1900;
	}

	// find pair of Integers within an array which sum to a specified value
	pairsWithSum(arr, sum) {
		let hm = new Map();
		let result = [ ];
		for (let i = 0; i < arr.length; i++) {
			hm.set(arr[i], i + 1);
		}

		for (let j = 0; j < arr.length; j++) {
			if (hm.get(sum - arr[j]) && j !== hm.get(sum - arr[j]) - 1) {
				result.push([j , hm.get(sum - arr[j]) - 1]);
			}
		}

		return result;
	}

	pairsWithSum1(arr, sum) {
		let mySet = new Set();
		let result = [ ];
		for (let i = 0; i < arr.length; i++) {
			if (mySet.has(sum - arr[i]) && !mySet.has(arr[i])) {
				console.log(arr[i], sum - arr[i]);

			} else {
				mySet.add(arr[i]);
			}
		}
	}

	gameOfMasterMind(soln, guess) {
		let result = new Map();
		result.set('hit', 0);
		result.set('pseudohit', 0);

		for (let i = 0; i < guess.length; i++) {
			if (soln[i] === guess[i]) {
				console.log('hit' + guess[i]);
				let hit = result.get('hit');
				result.set('hit', ++hit);
			} else {
					for (let j = 0; j < soln.length; j++) {
						if (guess[i] === soln[j] && i !== j) {
							console.log('pseudohit', guess[i]);
							let pseudohit = result.get('pseudohit');
							result.set('pseudohit', ++pseudohit);
							break;
						}
				}
			}
		}

		return result;
	}

	/* Given two array of integers, find a pair of values one from each array that you can swap. */

	sumSwap(array1, array2) {

	}

}

let personA = new Person(1900, 1910);
let personB = new Person(1920, 1925);
let personC = new Person(1930, 1940);
let personD = new Person(1918, 1922);
let personE = new Person(1910, 1915);
let personF = new Person(1910, 1918);


let listOfPeople = [ ];
listOfPeople.push(personA);
listOfPeople.push(personB);
listOfPeople.push(personC);
listOfPeople.push(personD);
listOfPeople.push(personE);
listOfPeople.push(personF);

let solution = [ 'R', 'G', 'G', 'Y'];
let guess = [ 'G', 'R', 'G', 'R'];

let array1 = [ 4, 1, 2, 1, 1, 2 ];
let array2 = [ 3, 6, 3, 3 ];

let moderateQs = new ModerateQs();
console.log(moderateQs.sumSwap(array1, array2 ));
//let arr = [1,2,3];
//console.log(Math.max(...arr));