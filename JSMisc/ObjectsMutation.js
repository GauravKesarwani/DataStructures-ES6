/* You can use object references to modify object members in javascript */

'use strict';

let object1 = { a: '1', b: '2' };
let object2 = object1;
console.log('Object 1 is ', object1);
object2.a = '5';
console.log('Modified object 1 is', object1);