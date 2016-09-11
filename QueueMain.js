'use strict';

var _Queue = require('./Queues/Queue.js');

var _Queue2 = _interopRequireDefault(_Queue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queue = new _Queue2.default(8);

console.log('Is Queue Empty', queue.isEmptyQueue());
queue.enQueue(10);
queue.enQueue(13);
queue.enQueue(12);
queue.enQueue(16);
queue.enQueue(19);
queue.enQueue(20);
queue.enQueue(22);
queue.enQueue(34);
//queue.enQueue(34);

queue.printQueue();
queue.reverseQueue();
queue.printQueue();
console.log('Is Queue Full', queue.isFullQueue());