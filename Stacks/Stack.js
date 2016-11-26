'use strict';

// Array Implementation of stack

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  function Stack(capacity) {
    _classCallCheck(this, Stack);

    this._stackRep = new Array(capacity);
    this._top = -1;
    this.size = 0;
  }

  _createClass(Stack, [{
    key: 'isStackEmpty',
    value: function isStackEmpty() {
      if (this._top < 0) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'isStackFull',
    value: function isStackFull() {
      if (this.top + 1 === this.capacity) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'push',
    value: function push(data) {
      if (this.isStackFull()) {
        throw 'Stack is Full';
      }
      this._stackRep[++this._top] = data;
    }
  }, {
    key: 'pop',
    value: function pop() {
      if (this.isStackEmpty()) {
        throw 'Stack is Empty';
      }
      var data = this._stackRep[this._top--];
      return data;
    }
  }, {
    key: 'peek',
    value: function peek() {
      if (this.isStackEmpty()) {
        throw 'Stack is Empty';
      }
      return this._stackRep[this._top];
    }
  }, {
    key: 'printStack',
    value: function printStack() {
      this._stackRep.forEach(function (value, index, array) {
        console.log(value);
      });
    }

    // Reverse a stack using only push and pop operations. No additional data structure to be used.

  }, {
    key: 'reverseAStack',
    value: function reverseAStack(stack) {
      if (stack.isStackEmpty()) {
        return;
      }
      var temp = stack.pop();
      this.reverseAStack(stack);
      this.insertAtBottom(stack, temp);
    }
  }, {
    key: 'insertAtBottom',
    value: function insertAtBottom(stack, data) {
      if (stack.isStackEmpty()) {
        stack.push(data);
        return;
      }
      var temp = stack.pop();
      this.insertAtBottom(stack, data);
      stack.push(temp);
    }
  }, {
    key: 'recursiveRemoval',
    value: function recursiveRemoval(arr) {
      if (this.isStackEmpty()) {
        this.push(arr[0]);
      }

      var i = 1;
      while (i < arr.length) {
        if (this.peek() !== arr[i]) {
          this.push(arr[i]);
          i++;
        } else {
          while (i < arr.length && this.peek() == arr[i]) {
            i++;
          }
          this.pop();
        }
      }

      return this._top;
    }
  }]);

  return Stack;
}();

var stack = new Stack(12);

var arr = [1, 5, 6, 8, 8, 8, 0, 1, 1, 0, 6, 5];
stack.recursiveRemoval(arr);

stack.printStack();
