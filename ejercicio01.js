function iterar(numero) {
    numero++; // porque incrementar el número en 1 desde aqui???
    while (true) {//PARTE QUE QUIERO ENTENDER!!!
        if (next_pal(numero.toString())) { //llama a la funcion next_palm() y le pasa como argumento una representacion en cadena del numero actual
        console.log(numero)
            return numero;
        }
        numero++;
    console.log(numero)
    }
  }
  
  function next_pal(numero) {
    let pal = numero.split("");
    let alreves = pal.reverse("");
    let juntar = alreves.join("")

    console.log(juntar)
    return numero === juntar;
  }
  
  // Ejemplo de uso
  let numero = 333
  let funPal = iterar(numero);
  console.log(funPal);



/*function esPalindromo(cadena){
    let array = cadena.split("");
    let reverse = array.reverse("");
while(cadena != reverse.join("")){
    return cadena == reverse.join("") ? "si es palindromo" : "no es pali "+ i++
}

}
console.log(esPalindromo("181"))*/



/*function esPalindromo(cadena){
    let array = cadena.split("");
    let reverse = array.reverse("");
    return cadena = reverse.join("")

    }


console.log(esPalindromo("181"))
console.log(i)*/

/*function iterar(num) {
  num++; // Incrementar el número en 1
    while (true) {
        if (next_pal(num.toString())) { // Verificar si el número es palíndromo
        console.log(num)
            return num;
        }
    num++;
    console.log(num)
    }
  }

function next_pal(numero){
    let pal = numero.split("");
    let alreves = pal.reverse("");
    let juntar = alreves.join("")
    return numero == juntar
    
}

console.log(next_pal("182"))*/
/*function next_pal(numero){
    let pal = numero.split("");
    let alreves =pal.reverse("");
    let juntar = alreves.join("")
    while(numero != alreves.join("")){
        if(numero 1= alreves.join("")){
            console.log(numero)
            numero++

        }
        else if(numero == juntar){
            console.log(numero)

        }
    }
}
console.log(next_pal("180"))*/

/*function next_pal(numero){
    let pal = numero.split("")
    console.log("esta es el split ",pal)
    let alreves = pal.reverse("")
    console.log("esta es el reves ",alreves)

    let mostrar = numero == alreves.join("")
    console.log("esta es el join ",mostrar)

        for(i=numero; i<mostrar; i++){
        if(numero == alreves.join("")){
            mostrar = numero
            console.log("esta es dentro del if y el for ")

        }
}
}
console.log(next_pal(188))*/


/*function extraerAtaques(mascotaJugador){
    let ataques
    for(i = 0; i<mokepones.length; i++){
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}*/