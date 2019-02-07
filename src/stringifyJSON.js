// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
//[1, 'hi', undefined, false]
//output = "[1, "hi", null, false]"

var stringifyJSON = function(obj) {
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
  	return "" + obj;
  } else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
  		var arr = [];
  		for (let i = 0; i < obj.length; i++) {
  			if (obj[i] === undefined || typeof obj[i] === 'function' || typeof obj[i] === 'symbol') { 
  				arr.push('null');
  			} else {
  				arr.push(stringifyJSON(obj[i]));
  			}
  		}
  		return '[' + arr + ']'; 
  } else if (typeof obj === 'object') {
  	var arr1 = [];
  	for (var key in obj) {
  		if (typeof obj[key] === 'string' || typeof obj[key] === 'number' || 
          typeof obj[key] === 'boolean' || typeof obj[key] === 'object') {
  		  var strKey = '"' + key + '":'; 
  		  arr1.push(strKey +  stringifyJSON(obj[key]));
  		} 
  	}
  	return '{' + arr1 + '}';
  }
};


//expected '{"functions":undefined,"undefined":undefined}' to equal '{}'  '[{}]'
// [
//   {
//     'functions': function() {},
//     'undefined': undefined
//   }
// ]

  //build cases for arrays, objects with key/value pairs, and date and make sure each data type works
  //distinguish between array or object
  	//recursively go through each