// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
//You should use document.body, element.childNodes, and element.classList

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  var hasClassName = element => {
  	if (element.classList && element.classList.contains(className)) {
  		result.push(element);
  	};
  	if (element.childNodes) {
  		element.childNodes.forEach(i => hasClassName(i));
  	};
  };
  hasClassName(document.body);
  return result;
};

/*
empty array holder
Go into document body
if element includes className, push into array holder
if element has child nodes, iterate through child nodes
recurse getElementsByClassName(element[i])

return array holder

<div>  --> parentNode
	<div> -->childNode[0]
	</div>
	<div class = ...> --->childNode[1]
	</div>
</div>

*/