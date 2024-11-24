//Ejercicio 4: Encontrar el palíndromo

function buscandoElPalindromo(secuenciaPalindromica) {

    let secuenciaPalabraSinEspacios = secuenciaPalindromica.trim();

    let secuenciandoPalabras = secuenciaPalabraSinEspacios.replace(/[^a-zA-Z0-9]/g, "")
    
    let obteniendoLaPalabra = secuenciandoPalabras.toLowerCase();

    let separandoLaPalabra = obteniendoLaPalabra.split("");
    
    let secuenciaAInvertir = separandoLaPalabra.reverse();
   
    let resultadoPalabraParaInvertir = secuenciaAInvertir.join("");

    return obteniendoLaPalabra === resultadoPalabraParaInvertir;

}


console.log("Solución:");
console.log(buscandoElPalindromo("Anilina")); 
console.log(buscandoElPalindromo("Soy Bart Simpson"));        
console.log(buscandoElPalindromo("Yo hago yoga hoy")); 
console.log(buscandoElPalindromo("Se es o no se es")); 
console.log();