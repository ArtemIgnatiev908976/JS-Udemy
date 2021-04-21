'use strict'

// let div = document.getElementById('playground')
//
// let p = document.getElementsByClassName('text')
// let h1 = document.getElementsByTagName('h1')
//
// console.log(div)
// console.log(p)
// console.log(h1)

// тот же самый результат новый метод

let div = document.querySelector('#playground');
let p = document.querySelectorAll('.text');
let h1 = document.querySelector('h1');
let ul = document.querySelector('div#playground ul');
let input = document.querySelector('input')

div.innerHTML ='<h2 style="color: red">From java script</h2>'
h1.textContent = 'Changed from js'


console.log(div.innerHTML)
console.log(p)
console.log(h1.textContent)
console.log(ul)
console.log(input.value)