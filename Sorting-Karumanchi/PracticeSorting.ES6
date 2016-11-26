'use strict';

class SortingAlgos {

	// 1. Choose the rightmost element as the pivot.
	// 2. Partition the array into left and right subarrays around the pivot.
	// 3. Sort the left subarray recursively.
	// 4. Sort the right subarray recursively.
	recursiveQuickSort(arr, left, right) {

		// Check the error condition

		if (arr.length < 1) {
			return -1;
		}
		else if (arr.length === 1) {
			// array is already sorted
			return arr;
		}
		else {
			let pivot = right;
			let partition = this.partitionit(arr, left, right, pivot);
			this.recursiveQuickSort(arr, 0, partition - 1);
			this.recursiveQuickSort(arr, partition, right);
		}

		return arr;
	}

	partitionit(arr, left, right, pivot) {
		let temp;
		while (left < right) {
			while((left < right) && arr[left] < arr[pivot]) {
				left++;
			}

			while((left < right) && arr[right]>=arr[pivot]) {
				right--;
			}

			temp = arr[left];
			arr[left] = arr[right];
			arr[right] = temp;
		}
		return left;
	}

	// If you have sorted the array then complexity should be O(nlogn) & not O(n^2)
	whoWinsElection(arr) {
		let i = 0,
			len = arr.length,
			counter = 0,
			winner = { };
			winner.maxVotes = Number.MIN_VALUE;


		arr.sort(function(a,b) {
			return a - b;
		});	
		console.log(arr);
		while(i < len) {
			let j = i,
			  counter = 0;
			while (j < len && arr[j] === arr[i]) {
				counter++;
				if (counter > winner.maxVotes) {
					winner.maxVotes = counter;
					winner.id = arr[j];
				}
				j++;
			}
			i = j;
		}

		return winner;
	}

	whoWinsElectionSingleLoop(arr) {
		let len = arr.length,
		  currentCandidate = arr[0],
		  maxCandidate = arr[0],
		  currentCounter = Number.MIN_VALUE,
		  maxCounter = 1;

		 arr.sort();
		 for (let i = 0; i < len; i++) {
		 	 if (arr[i] === currentCandidate) {
		 	 	 currentCounter++;
		 	 } else {
		 	 	currentCandidate = arr[i];
		 	 	currentCounter = 0;
		 	 }

		 	 if (currentCounter > maxCounter) {
		 	 	maxCounter = currentCounter;
		 	 	maxCandidate = currentCandidate;
		 	 }
		 }

		return maxCandidate; 
	}
}

let testInput = [ 12, 12, 12, 11, 12, 7, 9, 10, 11, 12, 9, 8, 9];

let winner = new SortingAlgos().whoWinsElectionSingleLoop(testInput);
console.log(winner);
