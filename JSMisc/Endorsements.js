/*
var endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

// Result
[
  { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  { skill: 'html', user: [ 'Sue' ], count: 1 }
];
*/

'use strict';

class Test {

	// Brute force Approach
	transformData(endorsements) {
		let result = [ ];
		let users = { };

		for (let i = 0, l = endorsements.length; i < l; i++) {
			let skill = endorsements[i].skill,
			  user = endorsements[i].user;
			if (!users[skill]) {
				users[skill] = [];
			}
			users[skill].push(user);
		}

		let j = 0;
		for (let i in users) {
			console.log(users[i]);
			result[j] = {};
			result[j].skill  = i;
			result[j].user = [ ];
			users[i].forEach(function(value, index, array) {
				result[j].user.push(value);
			});
			j++;
		}
		
		result.sort(function (a,b) {
			return a.user.length - b.user.length;
		});
		return result;
	}	

	transformData1(endorsements) {
		let result = [ ];
		let hash = { };

		for (let i = 0, l = endorsements.length; i < l; i++) {
			let skill = endorsements[i].skill,
			  user = endorsements[i].user;

			if (!hash[skill]) {
				hash[skill] = {
					skill: skill,
					user: [],
					count: 0
				}
				result.push(hash[skill]);
			} 

			hash[skill].user.push(user);
			hash[skill].count++;
		}

	
		//return result;
	}
}

let endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

let test = new Test();
test.transformData1(endorsements);