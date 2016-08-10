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
}

let testInput = [ 12, 15, 10, 11, 8, 7, 19];

new SortingAlgos().recursiveQuickSort(testInput, 0, testInput.length - 1);
