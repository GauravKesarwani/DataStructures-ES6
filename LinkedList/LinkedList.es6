'use strict';

// class construct. More clean code. Looks more like java.
class Node {
  constructor(data) {
    this._data = data;
    this._next = null;
  }
}

class LinkedList {
  constructor(head) {
    this._head = head;
  };

  /* Print a new Link List */
  printList() {
    console.log('....printing list....');

    let current = this._head;
    console.log('value of n is ', current);
    while (current !== null) {
      console.log(current._data);
      current = current._next;
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

  isLengthEvenOrOdd() {
    let current = this._head,
      count = 0;
    while(current !== null) {
      count++;
      current = current._next;
    }
    if (count % 2 === 0) {
      console.log('Length is even');
    }
    else {
      console.log('Length is odd');
    }
  }

  mergeTwoLinkList(head1, head2) {
    let current1 = head1.next,
      current2 = head2,
      head3 = null;
    
    //determine the head and instantiate a new List
    if (head1._data <= head2._data) {
      head3 = head1
    }
    else {
      head3 = head2;
    }
  
    while(current1 !== null && current2 !== null) {
      if (current1._data <= current2._data) {
        current3._data = current1._data;
        current3._next = null;
        current1 = current1._next;
      }

    }
  }

  // In O(n) time
  removeDuplicates() {
    let current = this._head,
      duplicateSet = new Set();

    while(current !== null) {
      if (!duplicateSet.has(current._data)) {
        duplicateSet.add(current._data);
      }
      else {
        current._data = current._next._data;
        current._next = current._next._next;
      }
       current = current._next;
    }  
  }

  // If we know the length of LinkList then kth to last element is n - k + 1 from the beginning of the array
  // O(n) time... Iterative
  kthToLastElement(n, k) {
    let current = this._head;

    for (let i = 0; i < n - k + 1; i++) {
      current = current._next;
    }

    console.log(current._data);
  }

  // Recursive Solution
  kthToLastElementRecursive(node, k) {
    // base case
    if (node === null) {
      return 0;
    }
    else {
      let counter = 1 + this.kthToLastElementRecursive(node._next, k);
      if (counter === k) {
        console.log(node._data);
      }
      return counter;
    }
  }

  // Problem 58:  Karumanchi. Digits are in reverse order
  addTwoNumbers(linkedList1, linkedList2) {

    // add the edge cases

    if (linkedList1 === null) {
      return linkedList2;
    }

    if (linkedList2 === null) {
      return linkedList1;
    }

    let current1 = linkedList1._head,
      current2 = linkedList2._head,
      linkedList = new LinkedList();


    let sum = 0,
      carry = 0;
    while(current1 !== null || current2 !== null) {
      if (current1 && current2) {
        sum = current1._data + current2._data + carry;
      }
      else if (current1 && !current2) {
        sum = current1._data + carry;
      }
      else {
        sum = current2._data + carry;
      }

      carry= Math.floor(sum/10);
      sum%=10;

      

      linkedList.insertAtEnd(sum);
      current1= current1._next;
      current2 = current2._next;
    }  

    if (carry !== 0) {
      linkedList.insertAtEnd(carry);
    }

    return linkedList;
  }

  exchangeAdjacentNodes() {
    let current = this._head;

    if (current === null) {
      return;
    }
    while(current!== null && current._next !== null) {
      let temp = current._data;
      current._data = current._next._data;
      current._next._data = temp;
      current = current._next._next;
    }
  }

  // partition a Link List using element k.
  partitionLinkList(k) {
    let current = this._head;
    // create two Link Lists

    let linkList1 = new LinkedList(null);
    let linkList2 = new LinkedList(null);

    while(current !== null) {
      if (current._data <k) {
        linkList1.insertAtEnd(current._data);
      }
      else {
        linkList2.insertAtEnd(current._data);
      }
      current = current._next;
    }

    current = linkList1._head;
    while(current._next !== null) {
      current = current._next;
    }

    current._next = linkList2._head;
    return linkList1;
  }

  reverseBlocksOfKNodes(k) {
    let prev = null,
      current =  this._head,
      next;

    let i = 0;
    while (current && i < k) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      i++;
    }
  }

  // find n/kth element in LinkList
  findNByKthElement() {
    
  }


}

const first = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);
const sixth = new Node(6);
const seventh = new Node(7);
const eighth = new Node(8);
const ninth = new Node(9);

first._next = second;
second._next = third;
third._next = fourth;
fourth._next = fifth;
fifth._next = sixth;
sixth._next = seventh;
seventh._next = eight;
eighth._next = ninth;

const head1 = first1;

let linkedList1 = new LinkedList(head1);

linkedList1.printList();

let ll = linkedList1.partitionLinkList(5);
ll.printList();

ll.reverseBlocksOfKNodes();


