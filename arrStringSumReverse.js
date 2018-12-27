// сложить массивы в строке реверсировать и добавить Иванова

function testArray(a, b) {
    x = a.concat(b).split("").reverse().join("").concat("Ivanova");
    return x;
}