'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SortingAlgos = function () {
	function SortingAlgos() {
		_classCallCheck(this, SortingAlgos);
	}

	_createClass(SortingAlgos, [{
		key: 'recursiveQuickSort',


		// 1. Choose the rightmost element as the pivot.
		// 2. Partition the array into left and right subarrays around the pivot.
		// 3. Sort the left subarray recursively.
		// 4. Sort the right subarray recursively.
		value: function recursiveQuickSort(arr, left, right) {

			// Check the error condition

			if (arr.length < 1) {
				return -1;
			} else if (arr.length === 1) {
				// array is already sorted
				return arr;
			} else {
				var pivot = right;
				var partition = this.partitionit(arr, left, right, pivot);
				this.recursiveQuickSort(arr, 0, partition - 1);
				this.recursiveQuickSort(arr, partition, right);
			}

			return arr;
		}
	}, {
		key: 'partitionit',
		value: function partitionit(arr, left, right, pivot) {
			var temp = void 0;
			while (left < right) {
				while (left < right && arr[left] < arr[pivot]) {
					left++;
				}

				while (left < right && arr[right] >= arr[pivot]) {
					right--;
				}

				temp = arr[left];
				arr[left] = arr[right];
				arr[right] = temp;
			}
			return left;
		}
	}]);

	return SortingAlgos;
}();

var testInput = [12, 15, 10, 11, 8, 7, 19];

new SortingAlgos().recursiveQuickSort(testInput, 0, testInput.length - 1);

//# sourceMappingURL=PracticeSorting-compiled.js.map