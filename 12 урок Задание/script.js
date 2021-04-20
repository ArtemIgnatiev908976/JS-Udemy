// Переписать функцию checkAngLogAge таким образом чтобы
// в консоли можно было определить, что за обьект человек или машина
// мы могли сами определять с каким возрастом сравнивать (не только 10 лет но и любой другой возраст) это должно быть отображено в консоли




let carName = 'Ford'
let carYear = 2010
let personYear = 1990


function calculateAge(year){
    let currentYear =2018
    let result = currentYear - year
    return result
}

function  checkAngLogAge(year, name, compareTo){
    if(calculateAge(year) < compareTo){
        console.log('возраст ' + name + ' меньше ' + compareTo +' лет')
    }else {
        console.log('возраст ' + name + ' больше ' + compareTo +' лет')
    }
}




checkAngLogAge(carYear, 'машины',8)
checkAngLogAge(personYear, 'человека', 30)


//Функция
