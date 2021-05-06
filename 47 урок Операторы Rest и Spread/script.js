const form = document.querySelector('form')
form.addEventListener('submit', event => {

event.preventDefault()
    const title = form.title.value
    const text = form.text.value
    const description = form.description.value

    saveForm({
        title: title,
        text: text,
        description: description
    })
})

//старый вариант
// function saveForm(data){
//     const {title, text, description}=data  //деструктуризация
//
// const formData ={
//     date: new Date().toLocaleDateString(),
//     title: title,
//     text: text,
//     description: description
// }
//     console.log('Form data:', formData)
// }

// новый вариант Spread  для разворачивать объекты

// function saveForm(data){
//
// const formData ={
//     date: new Date().toLocaleDateString(),
//   ...data // просто разворачиваем Spread
// }
//     console.log('Form data:', formData)
// }

//Rest оператор  для сбора всех параметров
function saveForm(...args){
const [title, text, description] = args

    console.log('Args', args)
    const formData ={
        date: new Date().toLocaleDateString(),
        title, text, description

    }
    console.log('Form data:', args)
}