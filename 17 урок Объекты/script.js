let person ={
    name: 'Василий',
    year: '1990',
    family: ['Елена', 'Игорь'],
    car:{
        year: 2010,
        model: 'Ford'
    },

    calculateAge: function (){
       let age = 2018 -this.year // = person

        console.log('Возраст '+age)
    }

}

console.log(person)

console.log(person.name) //отобразить имя
console.log(person['year'])

let field ='car'
console.log(person[field].year)

person.year= 1993
console.log(person)

person.calculateAge()