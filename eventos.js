/* /// * MENU DESPLEGABLE  *  // */

const botonCopa = document.querySelector('#desktop');
const botonRound = document.querySelector('#btn-round');
const nave = document.querySelector('nav');

botonCopa.addEventListener('click', ()=> {

    let posicion = window.getComputedStyle(nave);
    let posicionTop = posicion.getPropertyValue('top');

    if( posicionTop < '0'){
        nave.style.position = 'fixed';
        nave.style.zIndex = '30';
        nave.style.top = '0';
        botonCopa.style.top='10vw'; 
    }
    
    if(posicionTop > '0'){
        nave.style.top = '-300px';
        botonCopa.style.top='4rem';
    }
})





