// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = obj => {
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
  	return "" + obj;
  } else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
      var arr = [];
      obj.forEach(i => {
        if (i === undefined || typeof i === 'function' || typeof i === 'symbol') {
          arr.push('null');
        } else {
          arr.push(stringifyJSON(i));
        };
      });
  		return '[' + arr + ']'; 
  } else if (typeof obj === 'object') {
  	  var objArr = [];
  	  for (var key in obj) {
  		  if (typeof obj[key] === 'string' || typeof obj[key] === 'number' || 
            typeof obj[key] === 'boolean' || typeof obj[key] === 'object') {
  		    var strKey = '"' + key + '":'; 
  		    objArr.push(strKey +  stringifyJSON(obj[key]));
  		  };
  	  };
  	  return '{' + objArr + '}';
    };
};

//build cases for arrays, objects with key/value pairs, and date and make sure each data type works
//distinguish between array or object
//recursively go through each