//func isPositive in arr

var arr = [1, 2, 3, -1, -2, -3];

function isPositive(num) {
	if (num >=0) {
		return true;
	} else {
		return false;
	}
}

var newArr = [];
for (var i = 0; i <= arr.length; i++) {
	if (isPositive(arr[i])) {
		newArr.push(arr[i]);
	}
}

console.log(newArr);