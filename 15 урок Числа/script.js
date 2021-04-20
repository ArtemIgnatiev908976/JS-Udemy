console.log(42);
console.log(-42);
console.log(1.5);
console.log(-8/3);
console.log(0xAB);
console.log(2e3);
console.log(NaN); //если не правильное значение
console.log(123 / 0) //Infinity бесконечность

let fortyTwo = 42
let delta = 8/3


console.log(fortyTwo.toString()) // в строку
console.log(+delta.toFixed(3) +4)  // 3 знака после запятой   + приводит в число
console.log(parseFloat(delta.toFixed(2))) // работает с дробными
console.log(parseInt(delta.toFixed(2)))  // работает с целыми числами
console.log(isNaN(45)) // можно проверять правильное ли число
console.log(isFinite(1/ 0)) //проверка на беконечность
console.log(isFinite(99999)) //проверка на беконечность
