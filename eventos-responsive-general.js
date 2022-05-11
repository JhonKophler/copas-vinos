/* /// * MENU DESPLEGABLE RESPONSIVE general*  // */

const botonCopaResponsive = document.querySelector('#movile');
const cancel = document.querySelector('#cancel');

botonCopaResponsive.addEventListener('click', ()=> {

    let posicion = window.getComputedStyle(nave);
    let posicionTop = posicion.getPropertyValue('top');

    if( posicionTop < '0'){
        nave.style.position = 'fixed';
        nave.style.zIndex = '30';
        nave.style.top = '0';
        botonCopa.style.top='10vw'; 
    }
})

cancel.addEventListener('click', ()=> {

    let posicion = window.getComputedStyle(nave);
    let posicionTop = posicion.getPropertyValue('top');

    if(posicionTop > '0'){
        nave.style.top = '-300px';
        botonCopa.style.top='4rem';
    } 
})

