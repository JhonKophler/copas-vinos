/* /// * MENU DESPLEGABLE RESPONSIVE home*  // */

const botonMenu = document.querySelector('#hamburguer');
const menuLinks = document.querySelector('.menu-responsive-link');

botonMenu.addEventListener('click', ()=> {
    
    let claseExistente = menuLinks.classList.contains('no-vision');

    if( claseExistente == false){
        console.log('ejecuta') ;
        menuLinks.classList.toggle('no-vision');
        menuLinks.classList.toggle('vision');
    }
    
    if( claseExistente == true){
        menuLinks.classList.toggle('no-vision');
        menuLinks.classList.toggle('vision');
        console.log("no ejecuta");
    }
})


