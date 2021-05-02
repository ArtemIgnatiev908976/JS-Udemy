let person = {
    age:29,
    name: 'Max',
    job: 'Frontend',
    displayInfo: function (ms){

        // let  self = this //замкнули this
        setTimeout(function (){
            console.log('Name:', this.name)
            console.log('Job:', this.job)
            console.log('Age:', this.age)

        }.bind(this), ms)

    }
}

person.displayInfo(500)