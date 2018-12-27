// piramid
for (var i = 1; i <= 9; i++) {
	for (var j = 1; j <= i; j++) {
		document.write(i);
	}
	document.write('<br>');
}

/*
1
22
333
4444
55555
666666
7777777
88888888
999999999
*/

var str = '';
for(var i = 0; i <= 10; i++) {
	str += 'xx';
	document.write(str + '<br>');
}

/*
xx
xxxx
xxxxxx
xxxxxxxx
xxxxxxxxxx
*/