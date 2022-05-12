const compra = document.querySelectorAll('#buy');
const textoCompra = document.querySelectorAll('.texto-compra');
const imgBtn = document.querySelectorAll('.botones-compra-vino');
const cancelCompra = document.querySelectorAll('.cancelar-compra');

/* BOTON COMPRA CARBON */
compra[0].addEventListener('click',()=>{
    textoCompra[0].style.display = 'none';
    textoCompra[1].style.display = 'none';
    imgBtn[0].classList.remove('btn-oculto');
});

cancelCompra[0].addEventListener('click',()=>{
    textoCompra[0].style.display = 'flex';
    textoCompra[1].style.display = 'flex';
    imgBtn[0].classList.add('btn-oculto');
}); 


/* BOTON COMPRA LA VACA ARGENTINA */
compra[1].addEventListener('click',()=>{
    textoCompra[2].style.display = 'none';
    textoCompra[3].style.display = 'none';
    imgBtn[1].classList.remove('btn-oculto');

});
cancelCompra[1].addEventListener('click',()=>{
    textoCompra[2].style.display = 'flex';
    textoCompra[3].style.display = 'flex';
    imgBtn[1].classList.add('btn-oculto');
}); 


/* BOTON COMPRA CHAMUYO */
compra[2].addEventListener('click',()=>{
    textoCompra[4].style.display = 'none';
    textoCompra[5].style.display = 'none';
    imgBtn[2].classList.remove('btn-oculto');

});
cancelCompra[2].addEventListener('click',()=>{
    textoCompra[4].style.display = 'flex';
    textoCompra[5].style.display = 'flex';
    imgBtn[2].classList.add('btn-oculto');
}); 