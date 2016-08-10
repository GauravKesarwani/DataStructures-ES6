'use strict';

class ClosureExample{
	closureTest() {
		for (var i = 0; i < 10; i++) {
			setTimeout((function() {
				console.log(i);
			})(i), 10);
		}
	}
}

console.log(new ClosureExample().closureTest());