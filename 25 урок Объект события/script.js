let divs = document.querySelectorAll('div')
let link = document.querySelector('a')

for(let i=0; i<divs.length; i++){
    divs[i].addEventListener('click', function (event){
       event.stopPropagation()  //убирает2ое событие при нажалии на синий квадрат

        console.log(this.getAttribute('id'))
    }, )  // если тру то всплытие если false то погружение в элемент
}

link.addEventListener('click', handleLinkClick)

function handleLinkClick(event){
    event.preventDefault()

    let div = divs[0]
    if(div.style.display ==='none'){
        div.style.display='flex'
    }else{
        div.style.display='none'
    }

   ///  тоже самое div.style.display = div.style.display ==='none' ? 'flex' : none

    console.log(div.style.display)
}