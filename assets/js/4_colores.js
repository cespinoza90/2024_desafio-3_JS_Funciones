const div1 = document.querySelector('#azul');
const div2 = document.querySelector('#rojo');
const div3 = document.querySelector('#verde');
const div4 = document.querySelector('#amarillo');

// Agregamos el evento 'click' a cada div
div1.addEventListener('click', function() {
  this.style.backgroundColor = 'black';
});

div2.addEventListener('click', function() {
  this.style.backgroundColor = 'black';
});

div3.addEventListener('click', function() {
  this.style.backgroundColor = 'black';
});

div4.addEventListener('click', function() {
    this.style.backgroundColor = 'black';
  });

// "key"

function crearNuevoDiv(color){
    const newDiv = document.createElement('div')
    newDiv.style.width = '200px'
    newDiv.style.height = '200px'
    newDiv.style.border = '2px'
    newDiv.style.borderStyle = 'solid'
    newDiv.style.marginBottom = '20px'
    newDiv.style.backgroundColor = color
    document.body.appendChild(newDiv)
}

let colorkey1;
const key = document.getElementById('key')
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        colorkey1 = '#ee3ef1';
    }
    else if (event.key === 's') {
        colorkey1 = '#f19d3e';
    }
    else if (event.key === 'd') {
        colorkey1 = '#3ef1f1';
    }

    else if (event.key === 'q') {
        crearNuevoDiv('#3d1e4d')
    }
    else if (event.key === 'w') {
        crearNuevoDiv('#716e73')
    }
    else if (event.key === 'e') {
        crearNuevoDiv('#7f621c')
    }
    key.style.backgroundColor = colorkey1
})