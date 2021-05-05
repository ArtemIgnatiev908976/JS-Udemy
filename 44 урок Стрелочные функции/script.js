//старый вариант
// function getAge(year){
//     const current = new Date().getFullYear()
//     return current-year
// }
//
// console.log(getAge(1993))


// //новый вариант
// const calculateAge = (year) => {
//     const current = new Date().getFullYear()
//   return current-year
// }
// console.log(calculateAge(1990))


// 3 пример

// const getAge = year => {
//     const current = new Date().getFullYear()
//     return current - year
// }
//
//
// console.log(getAge(1998))



//4 пример

// const getAge = year => new Date().getFullYear() - year
//
//
// const logAge = year => console.log(new Date().getFullYear()-year)
// logAge(1993)
// console.log(getAge(1991))

//5 пример

const person = {
    age:25,
    name: 'Max',
    logNameWithTimeout() {
       window.setTimeout(function (){
            console.log(this.name)
        },1000)
    }
}
console.log(person)