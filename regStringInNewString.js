// из строки находим совпадение с подстрокой и выдаем отдельной строкой с разделителем ;

function testRegExp(s, sub_s) {
    arr = [];
    reg = new RegExp(sub_s,"g","i");
    arr = s.match(reg);
    return arr.join(';');
}