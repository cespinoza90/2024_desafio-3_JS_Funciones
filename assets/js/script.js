// Función orginal:

//function pintar(){
//    ele.style.backgroundColor = 'yellow'
//}

//const ele = document.getElementById("ele1")
//ele.addEventListener("click", pintar);

// Función modificada:

const pintar = (color) => {
    let ele1 = document.getElementById('ele1');
    ele1.style.background = color;
}

pintar('green');

ele1 = document.getElementById('ele1');
ele1.addEventListener('click', () => {
    ele1.style.background = 'yellow'
})