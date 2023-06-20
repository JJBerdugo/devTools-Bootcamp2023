//1. hacer una sola funcion que reciba el arreglo y 
//1.1 lo recorra y asigne la posicion de cada nombre en el mismo arreglo: usamos un metodo 'split(",")' para separar cada elemento y guardarlo.
//1.2 guardarlo en un objeto declarado al inicio dentro de la funcion
//2.  Recorrer el objeto asignandole una nueva 'propiedad' a cada elemento del array: el numero de veces que se repite el nombre
//2.1 Para eso dentro del bucle debemos usar un condicional para
//2.1.1 Incremente++ el contador en el numero de veces que encontro repetido cada nombre
//2.1.2 Iguale el contador a 1 ya que asi definimos que el nombre fue encontrado por lo menos 1 vez.
//3. Buscar imprimir como lo requiere el ejercicio: el nombre con el numero de veces que se encontro repetido, representando esto con un "*" por cada vez encontrado igual un nombre en el arreglo
//3.1 Para esto definimos un nuevo objeto que va a recibir la informacion nueva para decirle que tome la cantidad de veces encontrado un nombre y escriba una nueva 'propiedad' para poder representar en "*" esta cantidad
//NOTA: El CONDICIONAL usado dentro del bucle del punto '2.' es solo para incrementar o asignar = 1. 
//3.1.1 Ahora usaremos un nuevo bucle 'for in' para asignar una variable al valor encontrado en el bucle anterior, representandola con el "*" por el numero de veces que se encontrado un nombre repetido
//3.2  En una variable igualaremos un string con el metodo .repeat(donde le diremos la cantidad de veces que el nombre fue encontrado [aqui va la posicion en el array que tiene el nombre que fue encontrado])
//3.3 En este nuevo objeto, ayudados por la 'variable' usada para identificar el 'objeto' donde esta el nombreasignamos los "**"
//3.4 luego tomamos esta variable que tiene asignamos los valores representados con "**" e igualamos el objeto nuevo creado[definiendo la posicion del array] 
//3.5 Esta funcion lo que va a 'return' es este ultimo objeto creado.
//4. Por ultimo igualamos una varible a = esta funcion(con el parametro que debe recibir 'QUE ES UN ARREGLO')

function countNameRepetitions(names){

  let nameCount = {}

    for(let j = 0; j < names.length; j++){
      let nameArray = names[j].split(",")
      
     for (let i = 0; i < nameArray.length; i++){
          const name = nameArray[i].toLowerCase();

        if(nameCount[name]){
            nameCount[name]++;
        }  
        else { 
            nameCount[name]=1;
        }
      }
  }
  
        let writeAsterisk = {};
    
    for(let name in nameCount){

        let asterisk = "*".repeat(nameCount[name])
            writeAsterisk[name] = asterisk;
    }

      return writeAsterisk;
    }



let names = ["Juan", "Maria", "Pedro", "Juan", "mArIa","mArIa", "Maria", "caRlos", "Carlos", "CARLOS"];
let result = countNameRepetitions(names);
console.log(result);