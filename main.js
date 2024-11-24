// Ejercicio 1: Calcular el área de un rectángulo

//La funcion para obtener el área a va tomar dos parámetros
 
function obtenerAreaRectangulo(largoRectangulo, anchoRectangulo) {

    //Guardar en una variable el cálculo del área
    
    let areaRectangulo = largoRectangulo * anchoRectangulo;
    
    //Mostrar el valor calculado

    return areaRectangulo;
}

console.log("Resolución ejercicio 1: ");
console.log(obtenerAreaRectangulo(8, 10)); 
console.log(obtenerAreaRectangulo(120, 4));  
console.log(obtenerAreaRectangulo(7, 2)); 
console.log();

//Ejercicio 2: Contar palabras en una cadena

function contandoPalabras(palabrasParaContar) {

    //Elimino los espacios al inicio y final de las palabras. Luego guardo en una variable

    let totalDePalabras = palabrasParaContar.trim();

    //Para obtener la catidad de palabras que tengo. Luego guardo en una variable

    let separacionPalabra = totalDePalabras.split(/\s+/);

    //Para contar el número de palabras. Luego guardo en una variable

    let cantidadDePalabras = separacionPalabra.length;

    //Mostrar el valor obtenido
    
    return cantidadDePalabras;
}


console.log("Resolución ejercicio 2:");
console.log(contandoPalabras("Marge no voy a mentirte"));            
console.log(contandoPalabras("Gracias por elegirnos"));     
console.log(contandoPalabras("El amor en los tiempos del cólera")); 
console.log(); 

//Ejercicio 3:  Invertir una cadena

function invertirPalabra(palabraParaInvertir) {

    //Para dividir la palabra en caracteres utilizando un array. Luego guardo en una variable

    let separacionPalabra = palabraParaInvertir.split("");

    //Para invertir el orden de los caracteres. Luego guardo en una variable

    let invertirLaPalabra = separacionPalabra.reverse();

    //Para unir los caracteres y formar la una palabra. Luego guardo en una variable

    let palabraInvertida = invertirLaPalabra.join("");

    //Mostrar el resultado de la palabra invertida

    return palabraInvertida;
}


console.log("Resolución ejercicio 3:");
console.log(invertirPalabra("Homero"));   
console.log(invertirPalabra("Gaseosa")); 
console.log(invertirPalabra("Roble"));    
console.log(); 

//Ejercicio 4: Encontrar el palíndromo

function buscandoElPalindromo(secuenciaPalindromica) {

    //Eliminar los espacios al inicio y al final de la secuencia o palabras. Luego guardar en una variable

    let secuenciaPalabraSinEspacios = secuenciaPalindromica.trim();

    //Eliminar caracteres no alfanumericos. Luego guardar en una varaible

    let secuenciandoPalabras = secuenciaPalabraSinEspacios.replace(/[^a-zA-Z0-9]/g, "")

    //Transformar todo a minuscula. Luego guardar en una variable
    
    let obteniendoLaPalabra = secuenciandoPalabras.toLowerCase();

    //Separar todo en caracteres individuales urilizando un array. Luego guardar en una variable

    let separandoLaPalabra = obteniendoLaPalabra.split("");
    
    //Para invertir el orden de los caracteres. Luego guardar en una variable

    let secuenciaAInvertir = separandoLaPalabra.reverse();

    //Para unir los caracteres y formar la una palabra. Luego guardar en una variable
   
    let resultadoPalabraParaInvertir = secuenciaAInvertir.join("");

    //Comparar las palabras

    return obteniendoLaPalabra === resultadoPalabraParaInvertir;

}


console.log("Resolución ejercicio 4:");
console.log(buscandoElPalindromo("Anilina")); 
console.log(buscandoElPalindromo("Soy Bart Simpson"));        
console.log(buscandoElPalindromo("Yo hago yoga hoy")); 
console.log(buscandoElPalindromo("Se es o no se es")); 
console.log();


//Ejercicio 5: Crear un programa para convertir la edad de un perro a años humanos

function transformarEdadPerruna() {

    //Solicitamos la edad del perro
    let edadPerruna = parseInt(prompt("Por farvor, ingresa la edad de tu perro en años:"));
    
    //Veririficar si la edad ingresada es valida
    if (isNaN(edadPerruna) || edadPerruna <= 0) {
        return "Por favor, ingresa una edad válida.";
    }

    //Realizar la transformación
    let transformacionEdadPerruna =  edadPerruna * 7;

    //Mostrar el valor de la transformación
    console.log(`Tu perro tiene ${transformacionEdadPerruna} años humanos.`);
}

console.log("Resolución Ejercicio 5:");
transformarEdadPerruna();
console.log(); 
transformarEdadPerruna();
console.log(); 
transformarEdadPerruna();
console.log();