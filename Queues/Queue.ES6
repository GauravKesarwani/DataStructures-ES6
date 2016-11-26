// Circular Array Implementation. Size of the array is fixed

// Empty Queue Condition. front = rear =-1

// During the enqueue operation front variable is checked. If it is -1 it is set to rear

/* Todo: Using stack node module for now */
//let Stack = require('data-structures').Stack;

class Queue {
  constructor(capacity) {
    this.arr = new Array(capacity);
    this.front = this.rear = -1;      // Empty Queue condition
    this.capacity = capacity;
    this.size = 0;
  }

  size() {
    return this.size;
  }

  isEmptyQueue() {
    if (this.front === -1) {
      return true
    }
    else {
      return false;
    }
  }

  isFullQueue() {
    if ((this.rear + 1) % this.capacity === this.front) {
      return true;
    }
    else {
      return false;
    }
  }

  enQueue(data) {
    if (this.isFullQueue()) {
      throw 'Queue is Full';
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.arr[this.rear] = data;
    //check if queue is empty
    if (this.front === -1) {
      this.front = this.rear;
    }
    this.size++;
  }

  deQueue() {
    if (this.isEmptyQueue()) {
      throw 'Queue is Empty';
    }
    const data = this.arr[this.front];

    //check if there is only one element in thr queue
    if (this.front === this.rear) {
      this.front = this.rear = -1;
    }
    else {
      this.front = (this.front + 1) % this.capacity;
    }
    this.size--;
    return data;
  }

  reverseQueue() {
    // Using javascript array to simulating stack ADT as of now
    let stack = [ ];
    while (!this.isEmptyQueue()) {
      let data = this.deQueue();
      stack.push(data);
    }

    console.log(stack);
    this.arr.fill('');
    while(stack.length) {
      let data = stack.pop();
      this.enQueue(data);
    }

    return this;
  }

  printQueue() {
    this.arr.forEach(function(value, index, arr) {
      console.log(value);
    });
  }

}

export default Queue;
