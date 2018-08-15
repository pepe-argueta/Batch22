/* /* 
function triple(num){
    return num * 3;
}


console.log(triple(10));
 *

let triple = function(numero){
    return numero * 3;
}
let variable = triple;

let final = variable;

console.log(final(2));


 */
//Funciones de Orden Superior.


//Funciones callback
/*

let funcionDeOrdenSuperior = function(callback){
    console.log("Hola, soy la funcion de orden superior");
    callback();
}

let funcionCallback = function(){
    console.log("Hola soy una Funcion callback");
}


//funcionDeOrdenSuperior( funcionCallback );


let ordenSuperior =  function( saludar ){
    console.log("hola, soy la funcion de orden superior");
    saludar();
}

let callback = function(){
    console.log("QUiubo Mundo");
}


ordenSuperior( callback ); 




let miFuncion = ( callback ) => {
    console.log("Soy una funcion de orden superiro");
    callback();
}

let callback = function(){
    console.log("QUiubo Mundo");
}

miFuncion( () => {

}); */



