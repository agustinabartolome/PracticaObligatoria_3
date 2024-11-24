//Ejercicio 2: Contar palabras en una cadena

function contandoPalabras(palabrasParaContar) {

    let totalDePalabras = palabrasParaContar.trim();

    let separacionPalabra = totalDePalabras.split(/\s+/);

    let cantidadDePalabras = separacionPalabra.length;
    
    return cantidadDePalabras;
}


console.log("Resolución:");
console.log(contandoPalabras("Marge no voy a mentirte"));            
console.log(contandoPalabras("Gracias por elegirnos"));     
console.log(contandoPalabras("El amor en los tiempos del cólera")); 
console.log(); 