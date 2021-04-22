let button = document.querySelector('button');
let h1 = document.querySelector('h1');
let input = document.querySelector('input')


function buttonHandler(){
    console.log('привет')
    h1.textContent = input.value
}

h1.addEventListener('mouseenter', function (){
    this.style.color = 'red'
    this.style.backgroundColor = 'yellow'
    console.log('Mouse has enter h1')
})

h1.addEventListener('mouseleave', function (){
    this.style.color='blue'
    this.style.backgroundColor = 'transparent'
    console.log('Mouse has leave h1')
})



button.addEventListener('click', buttonHandler)