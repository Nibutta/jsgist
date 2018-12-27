//деление большего на меньшее из функции и округление
function testMath(a, b, c, d) {
    var x = [a,b,c,d];
    x = Math.round(Math.max.apply(null,x)/Math.min.apply(null,x));
    return x;