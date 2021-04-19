let carColor = 'green'


// if (carColor === 'green') {
//     console.log('Цвет машины зеленый')
// } else if (carColor === 'yellow') {
//     console.log('Цвет машины желтый')
// } else if (carColor === 'red') {
//     console.log('Цвет машины красный')
// } else {
//     console.log('Цвет машины не определен')
// }

switch (carColor){
    case 'green': console.log('Цвет машины зеленый')
        break
    case 'yellow': console.log('Цвет машины желтый')
        break
    case 'red': console.log('Цвет машины красный')
        break
    default:  console.log('Цвет машины не определен')
}