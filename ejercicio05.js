//math.floor para redondear decimales a enteros cuando se hace la division
//math.abs valor absoluto de un nnumero es decir deja enteros positivos
//conozco el valor de inicio = 0 y el valor del final =(15)"ejemplo"
//le puedo decir que si el i =0 y tamano = j(que seria el otro extremo) imprima "*"
//cuando se incremente el for y i++ sea 1, tamano sea = j -i-1 "que creo seria: 15-1-1"
//es decir que cuando i =0, tamano = 15 - 0 -1 el ultimo -1 recordar que es porque la ultima posicion del contador debe reducirse en uno ya que el contador, arranco en 0

function drawX(tamano){
    const matrix = {
        aster:"*",
        vacio:" "
    };

for(let i =0; i < tamano; i++){
    let escribir = "";
    for(let j =0; j<tamano; j++){
        if(i === j || j === tamano-i-1){// inician los i=0 y j=0; si 0 = 0  , o si por ejemplo el tamano=5: tamano(5-0-1) seria 4. esto para escribir en los 2 extremos en 0 y en 4 teniento en cuenta que tamano es 5posiciones contando desde 0,1,2,3,4
            escribir += matrix.aster; //no olvidad el mas +=
        } else {
            escribir += matrix.vacio;//no olvidad el mas +=
        }
    }
    console.log(escribir);
}
}
drawX(7);

// decido usar un objeto como en el ejercicio 3 
// pero con un solo for, logro imprimir en cruz pero no logro la X
// tomo la decision de usar dos for pero no imprime y luego aplico
// el += e imprime. tambien estaba usando .repeat(con la mitad de tamano)
// pero al quitarlo sigue imprimiendo igual asi que no se necesita.