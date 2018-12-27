// просуммировать числа в двух массивах и вывести квадрат из их суммы

function testArray(a, b) {
    x=0;
    y=0;
   for (i=0; i < a.length; i++) {
       x += a[i];
   }
    for (j=0; j < b.length; j++) {
        y +=b[j];
    }
    return (x + y) * (x + y);
}