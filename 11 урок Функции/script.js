let carName = 'Ford'
let carYear = 2010
let personYear = 1990


function calculateAge(year){
    let currentYear =2018
    let result = currentYear - year
    return result
}

function  checkAngLogAge(year){
    if(calculateAge(year) <10){
        console.log('возраст меньше 10 лет')
    }else {
        console.log('возраст больше 10 лет')
    }
}




checkAngLogAge(carYear)
checkAngLogAge(personYear)


//Функция
