
function siguientePal (numero){
    let sumarUno = numero + 1;
    while(!numPal(sumarUno)){
        sumarUno++;
    }
    return sumarUno;
}


siguientePal(115);
console.log(resultado);