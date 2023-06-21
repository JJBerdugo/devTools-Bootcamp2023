let imprimir 

function numeroGuardar(recibeNumero){

    numeroInicial = recibeNumero.substring(0,3);
    numeroSec = recibeNumero.substring(3,6);
    numeroTer = recibeNumero.substring(6,10);

    let imprimirNumero = '('+ numeroInicial + ')' + ' ' + numeroSec + '-' + numeroTer;

return imprimirNumero;
}

let enviar = "3216546544"
imprimir = numeroGuardar(enviar)
console.log(imprimir)