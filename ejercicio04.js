//creo una funcion que reciba un parametro que sera el numero que voy a evaluar
//declaro mi variable para guardar lo que voy a escribir y le digo que ahi voy a guardar strings let respuesta = ' '
//debo evaluar cuatro casos si se divide por 3 y por 5; si se divide por 3; si se divide por 5; si no se divide ni por 3 ni por 5... quiero usar un switch para los 4 casos
// yo empezaria por evaluar si es divisible por 3
//acepto la sugerencia de empezar por la condicion mas dificil de cumplir y es que se divida por 3 y se divida por 5
//*esto me sirvio tambien para la hora de incrementar de uno en uno como condicion 'mientras' no se cumpla una expresion.
//el defoult del switch lo usare para cuando deba escribir "//+ el numero"
//para mi, recordar que el return lo que hace es devolver un valor que no va como parametro sino por fuera como respuesta y se optiene cuando se invoca la funcion
//para imprimir voy a crear la funcion imprimir que lo que va a hacer es escribir los numero mientras no se cumpla la condicion de que el numero que le doy sea divisible por 3 y por 5
//uso console.log(funcionFizzBuzz(numero)); ademas de decirle numero ++;
//fuera del while use un console log para los casos en los que si se este cumpliendo que el numero es divisible por3 o por 5 o por los 2 al 

function buscarFizzBuzz(numero){

  for (let i = 1; i <= numero; i++) {

    if(i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz");
    } else if(i % 5 === 0){
      console.log("Buzz");
    } else if(i % 3 === 0 ){
      console.log("Fizz");
    } else {
      console.log("//" + i);
    }

  }
}
buscarFizzBuzz(15);