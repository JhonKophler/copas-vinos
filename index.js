const respYes = document.querySelector('#yes');
const respNo = document.querySelector('#no');


respYes.addEventListener('click', ()=> {
    window.location = './route/home.html';
})

respNo.addEventListener('click', ()=>  {
    alert("REGRESA A LOS 18 AÑOS");
})


