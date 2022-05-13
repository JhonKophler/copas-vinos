const pagina = document.querySelector('.productos');
let mediaQuery = window.matchMedia('(max-width:  890px)');

class ViewText{
    guardarTexto(e){
        e.preventDefault();
        if (e.target.classList.contains('more')){
            const dataText = e.target.parentElement.parentElement;
            const title = dataText.querySelector('span');
            const verMas = dataText.querySelector('.more');
            const descripcion = dataText.querySelector('.description');
            
            /* ACCIONES DE TEXTOS */
            title.classList.toggle('ocultar-title');
            descripcion.classList.toggle('mostrar-description');
            verMas.classList.toggle('mover-more');
            verMas.innerHTML == 'ver más' ? verMas.innerHTML = 'ver menos' : verMas.innerHTML = 'ver más';


        };
    }
}
/* Mover elemento html */
const vaca = document.querySelector('.vakita');
console.log(vaca);
mediaQuery.onchange = () => {
    if (!mediaQuery.matches) {
        
    } 
    else{
        
        location.reload();
    }
};

const visor = new ViewText();

eventos();

function eventos(){
    pagina.addEventListener('click', (e) => { visor.guardarTexto(e); });
};