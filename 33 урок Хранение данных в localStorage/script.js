document.querySelector('button').addEventListener('click', function (event) {

    let value = document.querySelector('input').value

    let obj = {
        text: value
    }

    localStorage.setItem('headerText', JSON.stringify(obj))
})


document.addEventListener('DOMContentLoaded', function () {

    let obj ={}  // undefined
    try {
        obj = JSON.parse(localStorage.getItem('headerText'))

    } catch (e) {
    }


    // Проверяем если стока не пустая и у строки удаляем пробелы с помощью trim и если там что то есть то добавляем
    if (obj && obj.text && obj.text.trim()) {
        document.querySelector('h1').textContent = obj.text

    }


})