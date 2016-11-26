'use strict';

// Array Implementation of stack
class Stack {
  constructor(capacity) {
    this._stackRep = new Array(capacity);
    this._top = -1;
  }

  isStackEmpty() {
    if (this._top < 0) {
      return true;
    }
    else {
      return false;
    }
  }

  isStackFull() {
    if (this.top + 1 === this.capacity) {
      return true;
    }
    else {
      return false;
    }
  }

  push(data) {
    if (this.isStackFull()) {
      throw 'Stack is Full';
    }
    this._stackRep[++this._top] = data;
  }
  
  pop() {
    if (this.isStackEmpty()) {
      throw 'Stack is Empty';
    }
    const data = this._stackRep[this._top--];
    return data;
  }

  peek() {
    if (this.isStackEmpty()) {
      throw 'Stack is Empty';
    }
    return this._stackRep[this._top];
  }

  printStack() {
    this._stackRep.forEach(function(value, index, array) {
      console.log(value);
    })
  }

  // Reverse a stack using only push and pop operations. No additional data structure to be used.
  reverseAStack(stack) {
    if (stack.isStackEmpty()) {
      return;
    }
    let temp = stack.pop();
    this.reverseAStack(stack);
    this.insertAtBottom(stack, temp);
  }

  insertAtBottom(stack, data) {
    if (stack.isStackEmpty()) {
      stack.push(data);
      return;
    }
    let temp = stack.pop();
    this.insertAtBottom(stack, data);
    stack.push(temp);
  }

  recursiveRemoval(arr) {
    if (this.isStackEmpty()) {
      this.push(arr[0]);
    }

    let i = 1;
    while (i < arr.length) {
      if (this.peek() !== arr[i]) {
        this.push(arr[i]);
        i++;
      } else {
        while(i < arr.length && this.peek() == arr[i]) {
          i++;
        }
        this.pop();
      }
    }

    return this._top;
  }
}

let stack = new Stack(12);

let arr = [1, 5, 6, 8, 8, 8, 0, 1, 1, 0, 6, 5];
stack.recursiveRemoval(arr);

stack.printStack();