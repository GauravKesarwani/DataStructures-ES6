'use strict';

// class construct. More clean code. Looks more like java.

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(data) {
  _classCallCheck(this, Node);

  this._data = data;
  this._next = null;
};

var LinkedList = function () {
  function LinkedList(head) {
    _classCallCheck(this, LinkedList);

    this._head = head;
  }

  _createClass(LinkedList, [{
    key: 'printList',


    /* Print a new Link List */
    value: function printList() {
      console.log('....printing list....');

      var current = this._head;
      console.log('value of n is ', current);
      while (current !== null) {
        console.log(current._data);
        current = current._next;
      }
    }
  }, {
    key: 'insertAtBeginning',


    /* Linked List Insertion */

    /* Insert a node at front of link list */

    value: function insertAtBeginning(data) {
      var node = new Node(data);
      node._next = this._head;
      this._head = node;
    }
  }, {
    key: 'insertAfterANode',


    /*
    * Insert a node after a given node. Assume index starts at 0
    *
    *  If counting starts at 1 i.e nth node then (i < index - 1)
    *
    *  Given the nth node or given the pointer of nth node.
    *
    * */

    value: function insertAfterANode(data, index) {
      var node = new Node(data),
          current = this._head;
      for (var i = 0; i < index; i++) {
        if (current == null) {
          console.log('Invalid Index');
          return;
        }
        current = current._next;
      }

      node._next = current._next;
      current._next = node;
    }
  }, {
    key: 'insertAtEnd',


    /* Insert a node at end of link list */

    value: function insertAtEnd(data) {
      var current = this._head,
          node = new Node(data);

      // Consider the case when list is empty.
      if (this._head == null) {
        this._head = new Node(data);
        return;
      }

      while (current._next != null) {
        current = current._next;
      }

      current._next = node;
    }
  }, {
    key: 'deleteKey',


    /*
    *  Deletion in a linked list - Scenarios
    *   1. Delete the first element
    *   2. Delete the last element
    *   3. Delete an element in the middle of link list at a given position
    *   4. Delete an element with given key
    *
    * */

    value: function deleteKey(data) {
      var current = this._head,
          prev = null;

      //if node to be deleted is the first node.

      if (current != null && current._data === data) {
        this._head = current._next;
        console.log('Deleted the node with key ', data);
        return;
      }

      while (current._data != data) {
        prev = current;
        current = current._next;
      }

      // if key is not present in linked list
      if (current === null) {
        return;
      }

      prev._next = current._next;
      console.log('Deleted the node with key ', data);
      return;
    }
  }, {
    key: 'deleteNodeAtIndex',


    /* Can be done using only one temporary variable. See geek for geeks.*/
    value: function deleteNodeAtIndex(index) {
      var i = 0,
          current = this._head,
          prev = null;

      if (current == null) {
        console.log('Invalid request..! List is empty..!');
        return;
      }

      //if head needs to be removed
      if (i == 0) {
        this._head = current._next;
      }

      while (i < index) {
        prev = current;
        current = current._next;
        i++;
      }
      if (current == null) {
        console.log('Position is greater than number of nodes to be deleted');
        return;
      }
      prev._next = current._next;
    }
  }, {
    key: 'binaryToDecimal',
    value: function binaryToDecimal() {
      var binaryString = '',
          current = this._head;
      while (current != null) {
        binaryString = binaryString + current._data;
        current = current._next;
      }
      return parseInt(binaryString, 2);
    }
  }, {
    key: 'checkIfPallindrome',
    value: function checkIfPallindrome(dataString) {
      var stringLength = dataString.length;
      for (var i = 0; i < stringLength; i++) {
        if (dataString.charAt(i) !== dataString.charAt(stringLength - i - 1)) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'isLinkListPallindrome',
    value: function isLinkListPallindrome() {
      var current = this._head,
          dataString = '';
      while (current != null) {
        dataString += current._data;
        current = current._next;
      }

      return this.checkIfPallindrome(dataString);
    }
  }, {
    key: 'isLengthEvenOrOdd',
    value: function isLengthEvenOrOdd() {
      var current = this._head,
          count = 0;
      while (current !== null) {
        count++;
        current = current._next;
      }
      if (count % 2 === 0) {
        console.log('Length is even');
      } else {
        console.log('Length is odd');
      }
    }
  }, {
    key: 'mergeTwoLinkList',
    value: function mergeTwoLinkList(head1, head2) {
      var current1 = head1.next,
          current2 = head2,
          head3 = null;

      //determine the head and instantiate a new List
      if (head1._data <= head2._data) {
        head3 = head1;
      } else {
        head3 = head2;
      }

      while (current1 !== null && current2 !== null) {
        if (current1._data <= current2._data) {
          current3._data = current1._data;
          current3._next = null;
          current1 = current1._next;
        }
      }
    }

    // In O(n) time

  }, {
    key: 'removeDuplicates',
    value: function removeDuplicates() {
      var current = this._head,
          duplicateSet = new Set();

      while (current !== null) {
        if (!duplicateSet.has(current._data)) {
          duplicateSet.add(current._data);
        } else {
          current._data = current._next._data;
          current._next = current._next._next;
        }
        current = current._next;
      }
    }

    // If we know the length of LinkList then kth to last element is n - k + 1 from the beginning of the array
    // O(n) time... Iterative

  }, {
    key: 'kthToLastElement',
    value: function kthToLastElement(n, k) {
      var current = this._head;

      for (var i = 0; i < n - k + 1; i++) {
        current = current._next;
      }

      console.log(current._data);
    }

    // Recursive Solution

  }, {
    key: 'kthToLastElementRecursive',
    value: function kthToLastElementRecursive(node, k) {
      // base case
      if (node === null) {
        return 0;
      } else {
        var counter = 1 + this.kthToLastElementRecursive(node._next, k);
        if (counter === k) {
          console.log(node._data);
        }
        return counter;
      }
    }

    // Problem 58:  Karumanchi. Digits are in reverse order

  }, {
    key: 'addTwoNumbers',
    value: function addTwoNumbers(linkedList1, linkedList2) {

      // add the edge cases

      if (linkedList1 === null) {
        return linkedList2;
      }

      if (linkedList2 === null) {
        return linkedList1;
      }

      var current1 = linkedList1._head,
          current2 = linkedList2._head,
          linkedList = new LinkedList();

      var sum = 0,
          carry = 0;
      while (current1 !== null || current2 !== null) {
        if (current1 && current2) {
          sum = current1._data + current2._data + carry;
        } else if (current1 && !current2) {
          sum = current1._data + carry;
        } else {
          sum = current2._data + carry;
        }

        carry = Math.floor(sum / 10);
        sum %= 10;

        linkedList.insertAtEnd(sum);
        current1 = current1._next;
        current2 = current2._next;
      }

      if (carry !== 0) {
        linkedList.insertAtEnd(carry);
      }

      return linkedList;
    }
  }, {
    key: 'exchangeAdjacentNodes',
    value: function exchangeAdjacentNodes() {
      var current = this._head;

      if (current === null) {
        return;
      }
      while (current !== null && current._next !== null) {
        var temp = current._data;
        current._data = current._next._data;
        current._next._data = temp;
        current = current._next._next;
      }
    }

    // partition a Link List using element k.

  }, {
    key: 'partitionLinkList',
    value: function partitionLinkList(k) {
      var current = this._head;
      // create two Link Lists

      var linkList1 = new LinkedList(null);
      var linkList2 = new LinkedList(null);

      while (current !== null) {
        if (current._data < k) {
          linkList1.insertAtEnd(current._data);
        } else {
          linkList2.insertAtEnd(current._data);
        }
        current = current._next;
      }

      current = linkList1._head;
      while (current._next !== null) {
        current = current._next;
      }

      current._next = linkList2._head;
      return linkList1;
    }
  }]);

  return LinkedList;
}();

var first1 = new Node(3);
var second1 = new Node(5);
var third1 = new Node(8);
var fourth1 = new Node(5);
var fifth1 = new Node(10);
var sixth1 = new Node(2);
var seventh1 = new Node(1);

first1._next = second1;
second1._next = third1;
third1._next = fourth1;
fourth1._next = fifth1;
fifth1._next = sixth1;
sixth1._next = seventh1;

var head1 = first1;

var linkedList1 = new LinkedList(head1);

linkedList1.printList();

var ll = linkedList1.partitionLinkList(5);
ll.printList();
