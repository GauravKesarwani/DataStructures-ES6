'use strict';

class SortingAlgos {
	constructor() {

	}

	bubbleSort(arr) {
		for (let outer = arr.length - 1; outer > 0; outer--) {
			for (let inner = 0; inner < outer; inner++) {
				if (arr[inner] > arr[inner+1]) {
					let temp = arr[inner];
					arr[inner] = arr[inner+1];
					arr[inner+1] = temp;
				}
			}
		}
	}
}

const arr = [ 13, 8, 19, 14, 12, 10, 67, 11 ];
let sortAlgos = new SortingAlgos();

sortAlgos.bubbleSort(arr);
