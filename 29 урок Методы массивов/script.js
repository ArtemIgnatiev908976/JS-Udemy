let str = '1,2,3,4,5,6,7,8';


let array = str.split(',')

// console.log(array.join(';')) // перечислить через  ;

// console.log(array.reverse()) // перевернуть массив

// array.splice(1,2)   // получаем начиная с двойки 2 элемента
array.splice(0, 1, '11') // 1 удалили 11 вставили

let newArray = array.concat([1, 2])  // клонирует и создает новый элемент


// console.log(newArray)


let objArr = [
    {name: 'Max', age: 27},
    {name: 'Elena', age: 18},
    {name: 'Victor', age: 20}
]

console.log(objArr)


//метод find проходит по всему массиву и его итерирует
let foundPerson = objArr.find(function (person) {
    return person.age === 20
})

console.log(foundPerson)

//сортировка массива
let oddArray = [1,2,3,4,5,6,7,8,9].filter(function (i){
    return i %2 !== 0
})

console.log(oddArray)


//трансформация данных в массиве
let numArray = array.map(function (i){
    return i*2
})

console.log(numArray)

