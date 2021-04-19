/*
    &&  | true  | false
  true  | true  | false
  false | false | false

    ||  | true  | false
  true  | true  | true
  false | true  | false

  && (и) - true если все значения true
  || (или) - true если хоть одно значение true
  ! (нет) - инвертирует true или false
*/
let currentYear = 2018
let carName = 'Ford'
let carYear = 2014
let carAge = currentYear - carYear

// если возраст машины меньше 5 лет то выводим сообщение
if(carAge<5){
    console.log(carName +  'Возраст машины меньше 5 лет')
}

// если возраст машины больше или равно 5 лет и меньше или равно 10 лет ...
else if(carAge >=5 && carAge<=10){
    console.log(carName + ' больше или равен 5 годам или меньше или равен 10 годам')
}
// иначе другое сообщение
else {
    console.log('Возраст ' + carName + ' равняется ' + carAge + ' годам')
}



//false
// 0 null undefined '' NaN

let empty = ''

if (NaN){
    console.log('Значение true')
}else{
    console.log('Значение false')
}

