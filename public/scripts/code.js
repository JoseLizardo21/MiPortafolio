const cambio = document.getElementById('cambio');
const frase1 = 'Me apasiona el desarrollo web"';
let num = 0;
const esc = setInterval(()=>{
    cambio.innerHTML += frase1[num];
    num++;
    if(num == frase1.length){
        clearInterval(esc);
    }
},100);