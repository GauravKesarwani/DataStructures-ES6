'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Circular Array Implementation. Size of the array is fixed

// Empty Queue Condition. front = rear =-1

/* Todo: Using stack node module for now */
//let Stack = require('data-structures').Stack;

var Queue = function () {
	function Queue(capacity) {
		_classCallCheck(this, Queue);

		this.arr = new Array(capacity);
		this.front = this.rear = -1; // Empty Queue condition
		this.capacity = capacity;
		this.size = 0;
	}

	_createClass(Queue, [{
		key: 'size',
		value: function size() {
			return this.size;
		}
	}, {
		key: 'isEmptyQueue',
		value: function isEmptyQueue() {
			if (this.front === -1) {
				return true;
			} else {
				return false;
			}
		}
	}, {
		key: 'isFullQueue',
		value: function isFullQueue() {
			if ((this.rear + 1) % this.capacity === this.front) {
				return true;
			} else {
				return false;
			}
		}
	}, {
		key: 'enQueue',
		value: function enQueue(data) {
			if (this.isFullQueue()) {
				throw 'Queue is Full';
			}
			this.rear = (this.rear + 1) % this.capacity;
			this.arr[this.rear] = data;
			if (this.front === -1) {
				this.front = this.rear;
			}
			this.size++;
		}
	}, {
		key: 'deQueue',
		value: function deQueue() {
			if (this.isEmptyQueue()) {
				throw 'Queue is Empty';
			}
			var data = this.arr[this.front];
			if (this.front === this.rear) {
				this.front = this.rear = -1;
			} else {
				this.front = (this.front + 1) % this.capacity;
			}
			this.size--;
			return data;
		}
	}, {
		key: 'reverseQueue',
		value: function reverseQueue() {
			// Using javascript array to simulating stack ADT as of now
			var stack = [];
			while (!this.isEmptyQueue()) {
				var data = this.deQueue();
				stack.push(data);
			}

			console.log(stack);
			this.arr.fill('');
			while (stack.length) {
				var _data = stack.pop();
				this.enQueue(_data);
			}

			return this;
		}
	}, {
		key: 'printQueue',
		value: function printQueue() {
			this.arr.forEach(function (value, index, arr) {
				console.log(value);
			});
		}
	}]);

	return Queue;
}();

exports.default = Queue;