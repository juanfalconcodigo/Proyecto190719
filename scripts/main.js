'use strict'
let buttonBarra=document.body.querySelector('#js_barra');
        let body=document.body;
        
        buttonBarra.addEventListener('click',()=>{
            console.log("gaaaaa");
            body.classList.toggle('show-menu');
        });