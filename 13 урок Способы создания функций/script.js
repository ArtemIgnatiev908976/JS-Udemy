//1 способ   доступнапо всему файлу
function sayHelloTo(name){
    console.log('Привет, ' + name)
}

sayHelloTo('Елена')

//2 способ  можно вызвать только после создания

let sayHelloTo2 = function (name){
    console.log('Привет, ' + name)
}

sayHelloTo2('Игорь')