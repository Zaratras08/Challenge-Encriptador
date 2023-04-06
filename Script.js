/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

murcielago --> murcienterlago
murcienterlago --> murcimesenterlago
murcimesenterlago --> murcimesenterlaigo
murcimesenterlaigo --> murcimesenterlaigober
murcimesenterlaigober --> mufatrcimesenterlaigober 
*/

function encriptar(){
    var mensaje = document.getElementById("input-mensaje").value.toLocaleLowerCase();
    var msencriptado = mensaje.replace(/e/igm, "enter");
    msencriptado = msencriptado.replace(/i/igm, "imes");
    msencriptado = msencriptado.replace(/a/igm, "ai");
    msencriptado = msencriptado.replace(/o/igm, "ober");
    msencriptado = msencriptado.replace(/u/igm, "ufat");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("titulomuneco").style.display = "none";
    document.getElementById("textomuneco").innerHTML = msencriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var mensaje = document.getElementById("input-mensaje").value.toLocaleLowerCase();
    var msencriptado = mensaje.replace(/ufat/igm, "u");
    msencriptado = msencriptado.replace(/ober/igm, "o");
    msencriptado = msencriptado.replace(/ai/igm, "a");
    msencriptado = msencriptado.replace(/imes/igm, "i");
    msencriptado = msencriptado.replace(/enter/igm, "e");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("titulomuneco").style.display = "none";
    document.getElementById("textomuneco").innerHTML = msencriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copy(){
    var contenido = document.getElementById("textomuneco");
    contenido.select();
    document.execCommand("copy");
    alert("¡Copiado!");
    document.getElementById("input-mensaje").value ="";
}