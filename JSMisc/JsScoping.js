
var Foo = function(a) {

	this.bar = function() {
		return a;
	} 

	this.baz = function() {
		return a;
	};
};

Foo.prototype = {
	biz: function() {
		return a;
	}
};

var f = new Foo(8);
console.log(f.bar());
console.log(f.baz());
console.log(f.biz());