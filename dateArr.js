function testDateTime(a, b) {
    a = new Date(a);
    b = new Date(b);
    return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'][a > b ? a.getDay() : b.getDay()];
    
}

// вывод даты через массив