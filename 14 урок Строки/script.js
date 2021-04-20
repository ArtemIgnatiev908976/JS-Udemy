let str1 = 'Hello world'
let str2 = "Hello world 2"

let personName = 'Виктор'

let message = 'Человека зовут "'+ personName +'"'
let message2 = 'Человека зовут \''+ personName +'\''   // \ обратный леш экранирует
console.log(str1)
console.log(str2)
console.log(message)
console.log(message2)



let newMessage ='Hello world!!!'
console.log(newMessage.length)
console.log(newMessage.toUpperCase())
console.log(newMessage.toLowerCase())
console.log(newMessage.charAt(1))  // вернул букву 1
console.log(newMessage.indexOf('world')) // на 6 символе находит слово world
console.log(newMessage.substr(1,4)) //забирает подстроки
console.log(newMessage.substr(newMessage.indexOf('world'),5)) //забирает подстроки
console.log(newMessage.substring(1, 3))
