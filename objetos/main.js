function miFuncion(){
    console.log("Hola");
}

/* miFuncion(); */

function miNuevaFuncion(nombre){
    console.log("Hola " + nombre);
}

let miNombre = "Jose";
/* miNuevaFuncion(miNombre); */


function saludar(nombre){
    console.log(`Hola ${ nombre } `);//Nueva forma de concatenar ES6
}

/* saludar("Jose");
 */

//SCOPE  "Alcance"


/* function suma(num1, num2){
    return num1 + num2;
}

console.log(suma(3,3)); */

function suma(num1, num2){
    //variable local
    let resultado = num1 + num2;
    return resultado;
}



/* let miFUncuinAnonima = function(){
    console.log("Soy una funcion anonima");
}

mi/* FUncuinAnonima(); 

let miFUncuinAnonima = () => {
    console.log("Funcion Flecha");
}

/* miFUncuinAnonima();
 


 let esMayorDeEdad = ( edad ) => {
     if( edad >= 18){
         return "Es mayor de edad";
     } else {
         return "No es mayor de edad";
     }
 }

 console.log(esMayorDeEdad(19));




 */


 //OBJETOS

 let miObjeto = {};
 console.log(miObjeto);