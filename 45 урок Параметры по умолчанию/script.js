const createPost = (title, text='Default text', date = new Date().toLocaleDateString()) => {

    return {
        title: title,
        text: text,
        date:date
    }
}

const post = createPost('Скоро новый год', 'Скоро будет 2022!', )
console.log(post)