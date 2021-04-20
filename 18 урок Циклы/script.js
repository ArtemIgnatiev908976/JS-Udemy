let numbers =[1,2,3,4,5,6,7,8,9]
//numbers.push('Not a number')
//numbers.push('New line')
//   начинается с 0; выполнется до тех пор пока i  меньше 5; операция инкремента  // i++ => i=5; 5<5 -> false на 4 шаге закончился
for  (let i = 0;               i<numbers.length;                                     i++) {
    if(numbers[i] % 2 ===0){
        console.log(numbers[i])
    }
}
//нечетные
for  (let i = 0;               i<numbers.length;                                     i++) {
    if(numbers[i] % 2 ===0){
        continue
    }
    console.log(numbers[i])
}

//проверка при строковом значении
numbers.push('String')

for  (let i = 0;               i<numbers.length;                                     i++) {
    if(typeof numbers[i] === 'string'){
        break
    }
    console.log(numbers[i])
}