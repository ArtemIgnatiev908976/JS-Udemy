function printObject(objName){
    console.log('Printing object', objName)
    for (let key in this ){
        if(this.hasOwnProperty(key)){
            console.log('['+key +']', this[key])
        }
    }
}






let person = {
    firstName: 'Max',
    job: 'Backend',
    age: 29,
    friends: ['Elena', 'Igor']
}

let car = {
    name: 'Ford',
    model: 'Focus',
    year: 2017
}


//1 способ
let printPerson =  printObject.bind(person)
printPerson('Person')

//2 второй способ
printObject.call(car, 'Car')


//3 способ
printObject.apply(person,['Person'])