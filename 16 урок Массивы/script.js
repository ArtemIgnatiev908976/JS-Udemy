let cars =[
    'Ford',
    'Mazda',
    'BMW',
    'KIA'
]

let any =[42,'apple', {a:1}]

console.log(cars)
console.log(any)

console.log(cars[1])  // олучаем конкретную машину

console.log(cars.length)  // длина массива

cars.push('Audi')  //Добавит в конец новый элемент
console.log(cars)

let audi = cars.pop() // удаляет и возращает элемент в конце
console.log(cars, audi)

let ford = cars.shift() // удалять и возращать первый элемент
console.log(cars, ford)

cars.unshift(audi) // добавляет в начало
console.log(cars)


let index = cars.indexOf('KIA')  //находим нужную машину
let kia = cars[index]
console.log(kia)