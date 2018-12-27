// flag

var arr = [1, 2, 3, 4, 5];
var flag = false;
for (var i = 0; i < arr.length; i++) {
	if (arr[i] == 5) {
		flag = true;
		break;
	}
}

if (flag == true) {
	alert('Да');
} else {
	alert('Нет');
}