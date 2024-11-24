//Ejercicio 3:  Invertir una cadena

function invertirPalabra(palabraParaInvertir) {

    let separacionPalabra = palabraParaInvertir.split("");

    let invertirLaPalabra = separacionPalabra.reverse();

    let palabraInvertida = invertirLaPalabra.join("");

    return palabraInvertida;
}


console.log("Resolución:");
console.log(invertirPalabra("Homero"));   
console.log(invertirPalabra("Gaseosa")); 
console.log(invertirPalabra("Roble"));    
console.log(); 
