let car = {
    /////...
}

function Car(name, year) {
    this.name = name
    this.year = year
}

Car.prototype.getAge = function (){
    return new Date().getFullYear()-this.year
}


Car.prototype.color = 'black'

let ford = new Car('Ford', 2015)
let bmw = new Car('Bmw', 2013)
console.log(ford)
console.log(bmw)