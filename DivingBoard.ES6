// Write a program to generate all possible lengths of diving board using K planks of wood.

'use strict';

class MiscAlgos {
	divingBoard(n, shortPlank, longPlank) {
		let allCombinations;
		if (n === 1) {
			allCombinations = [ ];
			allCombinations.push([shortPlank]);
			allCombinations.push([longPlank]);
		} else {
			allCombinations = this.divingBoard(n - 1, shortPlank, longPlank);
			let newCombinations = [ ];
			allCombinations.forEach(function(combination, index, array) {
				let newCombination = [ ];
				newCombination = newCombination.concat(combination);
				newCombination.push(shortPlank);
				newCombinations.push(newCombination);
				newCombination = [ ];
				newCombination = newCombination.concat(combination);
				newCombination.push(longPlank);
				newCombinations.push(newCombination);
			})

			allCombinations = newCombinations;
		}

		let sumSet = new Set();
		let filteredCombinations = [ ];

		for (let i = 0; i < allCombinations.length; i++) {
			let sum = allCombinations[i].reduce((prev , curr) => prev + curr);

			if (!sumSet.has(sum)) {
				filteredCombinations.push(allCombinations[i]);
				sumSet.add(sum);
			}

		}
		return filteredCombinations;
	}
}

let miscalgos = new MiscAlgos();
console.log(miscalgos.divingBoard(4, 2, 3));