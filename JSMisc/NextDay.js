'use strict';

Date.prototype.nextDay = function() {
	var currentDate = this.getDate();
	console.log('currentDate', currentDate);
	return new Date(this.setDate(currentDate + 1));
}

var d = new Date();

console.log('Next day', d.nextDay());
