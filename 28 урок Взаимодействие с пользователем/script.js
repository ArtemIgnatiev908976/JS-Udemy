document.querySelector('#alert').addEventListener('click', function (){
    alert('Вы успешно клкнули по кнопке')
})



document.querySelector('#confirm').addEventListener('click', function (){
   let decision = confirm('Вы уверены в том что хотете нажать на кнопку?')

    if(decision){
        alert('Вы успешно клкнули по кнопке')
    }else{
        alert('Вы нажали отмена')
    }
})



document.querySelector('#prompt').addEventListener('click', function (){
  let age =  prompt('Введите свой возраст',18)

  if (age >=18){
      alert ('Вы можете пройти')
  }else {
      alert('вы ее слишком молоды')
  }


})


console.log('Console log')
console.warn('Console.warn')
console.info('Console.info')
console.error('Console error')

throw new Error('error')  // выкидывает ошибку и останавливает выполнение кода