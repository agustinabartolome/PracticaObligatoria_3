//Ejercicio 5: Crear un programa para convertir la edad de un perro a años humanos

function transformarEdadPerruna() {
    let edadPerruna = parseInt(prompt("Por farvor, ingresa la edad de tu perro en años:"));

    if (isNaN(edadPerruna) || edadPerruna <= 0) {
        return "Por favor, ingresa una edad válida.";
    }

    let transformacionEdadPerruna =  edadPerruna * 7;

    console.log(`Tu perro tiene ${transformacionEdadPerruna} años humanos.`);
}


console.log("Resolución:");
transformarEdadPerruna();
console.log(); 
transformarEdadPerruna();
console.log(); 
transformarEdadPerruna();
console.log(); 