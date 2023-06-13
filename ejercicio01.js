let resultado

function numPal(sumarUno){
    //resultado = sumarUno;
    let cadena = sumarUno.toString();
    let reversa = cadena.split("").reverse().join("");

    if ((cadena !== reversa)){
        resultado = siguientePal(sumarUno)
        
    } else {
    return sumarUno;
}
}


function siguientePal (numero){
    let sumarUno = numero + 1;
    while(!numPal(sumarUno)){
        sumarUno++;
    }
    return sumarUno;
}



siguientePal();
console.log(resultado);
