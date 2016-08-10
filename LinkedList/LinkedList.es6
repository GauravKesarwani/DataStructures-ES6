'use strict';

// class construct. More clean code. Looks more like java.
class Node {
  constructor(data) {
    this._data = data;
    this._next = null;
  }
}

class LinkedList {
  constructor() {
    this.first = new Node("av");
    this.second = new Node("c");
    this.third = new Node("d");
    this.fourth = new Node("c");
    this.fifth = new Node("ba");
    this.first._next = this.second;
    this.second._next = this.third;
    this.third._next = this.fourth;
    this.fourth._next = this.fifth;
    this._head = this.first;
  };

  /* Print a new Link List */
  printList() {
    console.log('....printing list....');

    let n = this._head;
    console.log('value of n is ', n);
    while (n != null) {
      console.log(n._data);
      n = n._next;
    }
  };

  /* Linked List Insertion */

  /* Insert a node at front of link list */

  insertAtBeginning(data) {
    let node = new Node(data);
    node._next = this._head;
    this._head = node;
  };

  /*
  * Insert a node after a given node. Assume index starts at 0
  *
  *  If counting starts at 1 i.e nth node then (i < index - 1)
  *
  *  Given the nth node or given the pointer of nth node.
  *
  * */

  insertAfterANode(data, index) {
    let node = new Node(data),
      current = this._head;
    for (let i=0; i < index ; i++) {
      if (current == null) {
        console.log('Invalid Index');
        return;
      }
      current = current._next;
    }

    node._next = current._next;
    current._next = node;
  };

  /* Insert a node at end of link list */

  insertAtEnd(data) {
    let current = this._head,
      node = new Node(data);

    // Consider the case when list is empty.
    if (this._head == null) {
      this._head = new Node(data);
      return;
    }

    while(current._next != null) {
      current = current._next;
    }

    current._next = node;
  };

  /*
  *  Deletion in a linked list - Scenarios
  *   1. Delete the first element
  *   2. Delete the last element
  *   3. Delete an element in the middle of link list at a given position
  *   4. Delete an element with given key
  *
  * */

  deleteKey(data) {
    let current = this._head,
      prev = null;

    //if node to be deleted is the first node.

    if (current != null && current._data === data) {
      this._head = current._next;
      console.log('Deleted the node with key ', data);
      return;
    }

    while(current._data != data) {
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
  };

  /* Can be done using only one temporary variable. See geek for geeks.*/
  deleteNodeAtIndex(index) {
    let i = 0,
      current = this._head,
      prev = null;

    if (current == null) {
      console.log('Invalid request..! List is empty..!')
      return;
    }

    //if head needs to be removed
    if (i==0) {
      this._head = current._next;
    }

    while(i < index) {
      prev = current;
      current = current._next;
      i++;
    }
    if(current == null) {
      console.log('Position is greater than number of nodes to be deleted');
      return;
    }
    prev._next = current._next;
  };

  binaryToDecimal() {
    let binaryString = '',
      current = this._head;
    while(current != null) {
      binaryString = binaryString + current._data;
      current = current._next;
    }
   return parseInt(binaryString, 2);

  };

  checkIfPallindrome(dataString) {
    let stringLength = dataString.length;
    for (let i = 0; i < stringLength; i++) {
      if (dataString.charAt(i) !== dataString.charAt(stringLength - i - 1)) {
        return false;
      }
    }
    return true;
  };

  isLinkListPallindrome() {
    let current = this._head,
      dataString='';
    while(current != null) {
      dataString+= current._data;
      current = current._next;
    }

    return this.checkIfPallindrome(dataString);

  }
}
let linkedList = new LinkedList();
  
console.log(linkedList.isLinkListPallindrome());
