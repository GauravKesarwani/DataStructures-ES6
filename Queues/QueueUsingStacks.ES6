'use strict';

class QueueUsingStacks {
	constructor() {
		let stack1 = [ ];
		let stack2 = [ ];
	}

	// 1. Pop all items from stack 1 & push to stack 2
	// 2. Enqueue data on stack 1.
	// 3. Pop items from stack2 and push back to stack 1
	enQueue(data) {
		while (stack1.length) {
			const item = stack1.pop();
			stack2.push(item);
		}
		stack1.push(data);

		while(stack2.length) {
			const data = stack2.pop();
			stack1.push(data);
		}
	}

	deQueue() {
		if (!stack1.length) {
			throw 'Queue is Empty';
		}
		const data = stack1.pop();
		return data;
	}
}