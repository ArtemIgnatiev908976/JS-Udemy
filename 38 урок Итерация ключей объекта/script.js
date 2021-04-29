let person = {
    name: 'Max',
    age: '28',
    job: 'Frontend'
}

//1 способ
// for(let key in person){
//     if (person.hasOwnProperty(key))
//     console.log(person[key])
// }
//2 способ
Object.keys(person).forEach(function (key){
    console.log(person[key])
})
