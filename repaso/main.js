/* // variables
var saludo;
let hola;


//Declaracion de Variable
let loqueyoquiera;

//Asignacion de Variable
loqueyoquiera = 1;

let numero = 10;
let caracter = "c";
let cadena = "Hola que tal todo mundo";

/*
console.log("Esto lo acabo de escribir");
console.log(numero);
*/

// Estructuras de Control

// Condicional IF ELSE

/* let edad = 10;

if( edad >= 18 ){
    console.log("Eres legal");
} else {
    console.log("No eres legal");
} */

//


/*SWITCH
let fruta = "Manzana";
fruta = "Platano";
switch( fruta ){
    case "Manzana":
        console.log("Es " + fruta);
        break;
    case "Pera":
        console.log("Es " + fruta);
        break;
    case "Platano":
        console.log("Es " + fruta);
        break;

    default:
    console.log("No conozco esa fruta");
}



 */

 /* for ( var i = 1; i <= 100; i++){
     if( i % 2 == 0 ){
         console.log(i);
     }
 } */


 //ARREGLOS

 //console.log( typeof(arreglo));

 //arreglo = [10, "hola", true];

/*  arreglo = [
    "Hola",
    "como",
    "estas",
    "mi",
    "nombre",
    "es",
    "Jose"
 ];

 
 for( var i = 0; i < arreglo.length; i++){
     console.log(arreglo[i]);
 } */

 /* var numeros = [];

 for ( i = 1; i <= 10; i++){
     numeros.push(i);
 }

 console.log(numeros); */

 var texto = "cadenita";
 var arreglo = [];
 for (i = 0; i < texto.length; i++){
    arreglo[i] = texto.substring(i,i + 1);
    if( i % 2 == 0){
        arreglo[i] = arreglo[i].toUpperCase();
    } else {
        arreglo[i] = arreglo[i].toLowerCase();
    }   
 }
 texto = arreglo.toString();
 
 for (i = 0; i < texto.length; i++){
    texto = texto.replace(",","");
 }
 console.log(texto);