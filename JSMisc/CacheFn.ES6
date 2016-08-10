var cacheFn = function(fn) {
	var cache = { };

	return function(arg) {
		if (cache[arg]) {
			return cache[arg];
		}
		else {
			cache[arg] = fn(arg);
			return cache[arg];
		}
	}
}

cacheFn(function(a,b) {
	return sum = a + b;
});


