// большее число
var a = [100, -4, 25, 1, 0].sort(function (a,b){ return a-b;});

alert('массив отсортирован:' + a.join(",") + ', наибольшее число:' +  a.pop());


// большее из трех без функции и массива
var x;
var y;
var z;
x=prompt("Введите первое число X:","")
y=prompt("Введите второе число Y:","")
z=prompt("Введите третье число Z:","")
if(x=="")
{
alert("Вы не ввели первое число X!")
}
else if(y=="")
{
alert("Вы не ввели второе число Y!")
}
else if(z=="")
{
alert("Вы не ввели третье число Z!")
}

else if(x>=y)
{
if(x>=z)
{
alert("Это Х")
}
else 
{
alert("Это Z")
}
}
else 
{
if(y>=z)
{
alert("Это Y")
}
else 
{
alert("Это Z")
}
}

//Вы можете использовать функцию apply, чтобы вызвать Math.max:

var array = [267, 306, 108];
var largest = Math.max.apply(Math, array); // 306
Как это работает?

/*Функция apply используется для вызова другой функции с заданным 
контекстом и аргументами, представленными в виде массива.
 Функции min и max могут принимать произвольное количество 
 входных аргументов: Math.max(val1, val2,..., valN)*/

//Итак, если мы вызываем:

Math.min.apply(Math, [1,2,3,4]);
//Функция apply выполнит:

Math.min(1,2,3,4);
/*Обратите внимание, что первый параметр, контекст, не важен для этих функций, 
поскольку они являются статическими, они будут работать независимо от того, 
что передается как контекст.*/