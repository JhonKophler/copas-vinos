const compra = document.querySelectorAll('#buy');
const textoCompra = document.querySelectorAll('.texto-compra');
const imgBtn = document.querySelectorAll('.botones-compra-vino');
const cancelCompra = document.querySelectorAll('.cancelar-compra');

/* BOTON COMPRA CARBON */
compra[0].addEventListener('click',()=>{
    ocultar(0,1,0);
});

cancelCompra[0].addEventListener('click',()=>{
    mostrar(0,1,0);
}); 

/* BOTON COMPRA LA VACA ARGENTINA */
compra[1].addEventListener('click',()=>{
    ocultar(2,3,1);
});
cancelCompra[1].addEventListener('click',()=>{
    mostrar(2,3,1);
}); 

/* BOTON COMPRA SANTONEGRO */
compra[2].addEventListener('click',()=>{
    ocultar(4,5,2);
});
cancelCompra[2].addEventListener('click',()=>{
    mostrar(4,5,2);
}); 

/* ---------------- --------------------------------------------------*/

function mostrar(n,m,o){
    textoCompra[n].style.display = 'flex';
    textoCompra[m].style.display = 'flex';
    imgBtn[o].classList.add('btn-oculto');
}

function ocultar(n,m,o){
    textoCompra[n].style.display = 'none';
    textoCompra[m].style.display = 'none';
    imgBtn[o].classList.remove('btn-oculto');
};