let a = document.querySelector('a');

let oldHref = a.getAttribute('href');

a.setAttribute('href', 'https://ya.ru');
a.setAttribute('title', 'Go to yandex')
a.textContent = 'Yandex'


let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')

box1.classList.add('red')

let hasClass = box2.classList.contains('blue')

if (hasClass){
    box2.classList.remove('blue')
}else{
    box1.classList.add('blue')
}