'use strict';

class StackPractice {
  constructor(capacity) {
    this._stackArr = new Array(capacity);
    this._top = -1;
  }

  isStackFull() {
    if (this._top + 1 === this._capacity) {
      return true;
    } else {
      return false;
    }
  }

  isStackEmpty() {
    if (this._top === -1) {
      return true;
    } else {
      return false;
    }
  }

  push(data) {
    if (this.isStackFull()) {
      throw 'Stack is Full';
    } else {
      this._stackArr[++top] = data;
    }
  }

  pop() {
    if (this.isStackEmpty()) {
      throw 'Stack is Empty';
    } else {
      this._stackArr[top--];
    }
  }

  // reverse a stack using only push & pop operations. No additional data structures required.
  reverseAStack() {
    if (!isStackEmpty()) {
      let data = this.pop();
      this.reverseAStack();
      this.insertAtBottom(data);
    }
  }

  insertAtBottom(data) {
    if (this._top === -1) {
      this._stackArr[++top] = data;
      return;
    } else {
      let temp = this.pop();
      this.insertAtBottom(data);
      this.push(temp);

    }
  }

  // Input: 1, 5, 6, 8, 8, 0, 1, 1, 0, 6, 5
  // Output: 1
  
  recursivelyRemoveDuplicates(arr) {
    let len = arr.length,
      i = 1,
      arrStack = [ ],
      top = 0,
      skipElement;

    arrStack.push(arr[0])  
    while(i < len) {
      if (arr[i] != arrStack[top]) {
        if (arrStack[top] === skipElement) {
          arrStack.pop();
        }
        arrStack.push(arr[i]);
        i++;top++;
      } else {
        skipElement = arr[i];
        i++;
         
      }
    }  
    return arrStack;
  }
}

let stackPractice = new StackPractice();
let result = stackPractice.recursivelyRemoveDuplicates([ 1, 5, 6, 8, 8, 0, 1, 1, 0, 6, 5]);
console.log(result);