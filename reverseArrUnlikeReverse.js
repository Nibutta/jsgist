// unlike reverse push array 

var arr = [1, 3, 5, 6, 7, 9];
var result = [];
for (var i = arr.length - 1; i >= 0; i--) {
	result.push(arr[i]);
}
console.log(result);