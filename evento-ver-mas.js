const pagina = document.querySelector('.productos');
const contVinoVaca = document.querySelector('#vaca');
const contVinoImagen = document.querySelector('#vinoVacaImg');
let mediaQuery = window.matchMedia('(max-width:  780px)');
let ancho = document.documentElement.clientWidth;

class ViewText {
    animacionTexto(e) {
        //  VER MAS VAKITA DESKTOP
        if (e.target.classList.contains('more-vakita-desktop')) {

            const dataText = e.target.parentElement.parentElement;
            const title = dataText.querySelector('.title-vakita-desktop');
            const verMas = dataText.querySelector('.more-vakita-desktop');
            const descripcion = dataText.querySelector('.description-vakita-desktop');

            /* ACCIONES DE TEXTOS */
            title.classList.toggle('ocultar-title');
            descripcion.classList.toggle('mostrar-description');
            verMas.classList.toggle('mover-more');
            verMas.innerHTML == 'ver más' ? verMas.innerHTML = 'ver menos' : verMas.innerHTML = 'ver más';
        };

        //  VER MAS VAKITA MOVILE
        if (e.target.classList.contains('more-vakita-movile')) {

            const dataText = e.target.parentElement.parentElement;
            const title = dataText.querySelector('.title-vakita-movile');
            const verMas = dataText.querySelector('.more-vakita-movile');
            const descripcion = dataText.querySelector('.description-vakita-movile');
            /* ACCIONES DE TEXTOS */
            title.classList.toggle('ocultar-title');
            descripcion.classList.toggle('mostrar-description');
            verMas.classList.toggle('mover-more');
            verMas.innerHTML == 'ver más' ? verMas.innerHTML = 'ver menos' : verMas.innerHTML = 'ver más';
        };

        //  VER MAS GENERAL
        if (e.target.classList.contains('more') && !e.target.classList.contains('more-vakita-desktop') && !e.target.classList.contains('more-vakita-movile')) {
            let ancho = document.documentElement.clientWidth;
            const dataText = e.target.parentElement.parentElement;
            const title = dataText.querySelector('span');
            const verMas = dataText.querySelector('.more');
            const descripcion = dataText.querySelector('.description');
            const imgVinoAOcultarEnResponsive = dataText.querySelector('.img-vino');
            const img = imgVinoAOcultarEnResponsive.querySelector('img');

            if (ancho > 780) {
                /* ACCIONES DE TEXTOS */
                title.classList.toggle('ocultar-title');
                descripcion.classList.toggle('mostrar-description');
                verMas.classList.toggle('mover-more');
            }
            if (ancho <= 780) {
                /* ACCIONES DE TEXTOS  RESPONSIVE*/
                title.classList.toggle('ocultar-title');
                descripcion.classList.toggle('mostrar-description');
                verMas.classList.toggle('mover-more');
            }
            verMas.innerHTML == 'ver más' ? verMas.innerHTML = 'ver menos' : verMas.innerHTML = 'ver más';
        };
    };
};

/* Leer elementos en pantalla */

const visor = new ViewText();

eventos();

function eventos() {
    pagina.addEventListener('click', (e) => { visor.animacionTexto(e); });
};

