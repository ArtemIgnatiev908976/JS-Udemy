let a = document.querySelector('a');

let oldHref = a.getAttribute('href');

a.setAttribute('href', 'https://ya.ru');
a.setAttribute('title', 'Go to yandex')
a.textContent = 'Yandex'



console.log(a.attributes)