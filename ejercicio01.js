
function numPal(sumarUno){
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


siguientePal(115);
console.log(resultado);