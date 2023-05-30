function esPalindromo(cadena){
    let array = cadena.split("");
    let reverse = array.reverse("");
//while(cadena != reverse.join("")){
    for(let i = cadena; i<cadena == reverse.join(""); i++){
    return cadena == reverse.join("") ? "si es palindromo" : "no es pali "+ i++
}
}
//}
console.log(esPalindromo("182"))

/*function esPalindromo(cadena){
    let array = cadena.split("");
    let reverse = array.reverse("");
    for(i=cadena; cadena=reverse.join(""); i++){
    return cadena = reverse.join("")
    }

i++
}
console.log(esPalindromo("181"))
console.log(i)*/

/*function next_pal(numero){
    let pal = numero.split("");
    let alreves =pal.reverse("");
    while(numero != alreves.join("")){
        if(numero 1= alreves.join("")){
            console.log(numero)
            numero++

        }
        else if(numero == alreves.join("")){
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