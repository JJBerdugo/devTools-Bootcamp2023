/*Dado un array de nombres, tu objetivo es crear una función que cuente cuántas veces
se repite cada nombre y los represente con asteriscos (*).
Debes implementar la función countNameRepetitions(names), que tomará como
parámetro un array de nombres y devolverá un objeto con los nombres y su
representación de asteriscos correspondiente.
Ejemplo:
const nombres = ['Juan', 'María', 'Pedro', 'Juan', 'María', 'María'];
// Llamada a la función
const resultado = countNameRepetitions(nombres);
// Resultado esperado
//   Juan: '**',
//   María: '***',
//   Pedro: '*'
En el ejemplo anterior, se tiene un array de nombres donde 'Juan' se repite dos veces,
'María' se repite tres veces y 'Pedro' se repite una vez.
La función countNameRepetitions debe imprimir los nombres y su representación de
asteriscos correspondiente.
Recuerda que cada vez que un nombre se repite, se debe agregar un asterisco
adicional al valor asociado al nombre en el objeto de resultado*/

function countNameRepetitions(names){
    let nameCount = {}

    //nombres = names.split(",");
    
    //console.log(nombres);
    
     for (let i = 0; i < names.length; i++){
        const name = names[i].toLowerCase();
      if(nameCount[name]){
        nameCount[name]++;
      }  else { 
        nameCount[name]=1;
    }
    }
    //console.log(nameCount);
    let writeAsterisk = {}
    
    for(let name in nameCount){
        let asterisk = "*".repeat(nameCount[name])//entender!!
        writeAsterisk[name] = asterisk;//entender
        console.log(asterisk);
    }
    return writeAsterisk;
    }

//countNameRepetitions(["Juan, Maria, Pedro, Juan, Maria, Maria"]);
let names = ["Juan, Maria, Pedro, Juan, Maria, Maria"]
let result = countNameRepetitions(names);
console.log(result)