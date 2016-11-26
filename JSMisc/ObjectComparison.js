function eq(a, b) {
  // typeof does not distinguish objects from array.  toString 
  // provides more precise reflection
  var aClass = Object.prototype.toString.call(a),
      bClass = Object.prototype.toString.call(b),
      n = 0,
      len = 0,
      key = '';
    
    // quickly compare classes
    if (aClass !== bClass) {
      return false;   
    }
    
    console.log(aClass);
  
    // numbers and strings
    if (aClass === '[object Number]' || aClass === '[object String]') {
      return a === b;   
    }

    // array data type
    if (aClass === '[object Array]') {
        len = a.length;
        if (len !== b.length) {
          return false;
        }
        
        for (n=0; n<len; n++) {
            if (!eq(a[n], b[n])) {
              return false;   
            }
        }
    }
    
    if (aClass === '[object Object]') {
        for (key in a) {
            if (!eq(a[key], b[key])) {
                return false;
            }
        }
        // for (key in b) {
        //     if (!eq(b[key], b[key])) {
        //         return false;
        //     }
        // }
    }
    
    // return true if we cannot prove that the two elements are not
    // equal
    return true;
}

console.log('-------');

// test number
//console.log(eq(1, 1));

// test string
//console.log(eq('foo', 'foo'));

// test array
//console.log(eq([1, 2], [1, 2]));

// test object
console.log(eq({foo:{bar:1, baz:1}}, {foo:{bar:1, baz:1}}));