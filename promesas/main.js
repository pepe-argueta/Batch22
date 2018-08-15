


/* 
let promise = new Promise( function( resolve, reject) {

    resolve("Esta Promesa se Resolvio");
    reject("Esta promesa no se Resolvio");

});



promise.then( console.log );
promise.catch( console.log ); */
/* 
console.log("Se va a ejecutar la promesa!!")

let promise = new Promise( ( resolve, reject ) => {
    setTimeout(() => {
        resolve("Se resolvio");
    }, 3000);
});

promise.then( mensaje => console.log( mensaje ) )

console.log("Se acaba de ejecutar la promesa");



 */
 /* setTimeout(() => {
     console.log("PAsaron 3 seg")
 }, 3000);
 setTimeout(() => {
    console.log("PAsaron 2 seg")
}, 2000); */


/* 
let promesa = new Promise( (resolve, reject) => {

    let numero = 6;

    if(numero%2 == 0){
        resolve("Si es par")
    } else reject("No es Par")

});


promesa
    .then( mensaje => console.log( mensaje ) )
    .catch( mensaje => console.log( mensaje ) );

 */


/* const request = require('request');

 let promesaSWAPI = new Promise( ( resolve, reject) => {

    request.get("https://swapi.co/api/people/13/", (error, response, body) => {

        response.statusCode == 200
        ? resolve(JSON.parse(body))
        : reject(error);

    });


 });

 promesaSWAPI
    .then( json => console.log( json ))
    .catch( error => console.log( error )); */

    //Tipos de cualquier clima y nombre del planeta
/* 
const request = require('request');


let promesa = new Promise( ( resolve, reject ) => {
    request.get("https://swapi.co/api/planets/12/", ( error, response, body ) => {
        response.statusCode == 200
        ? resolve(` El planeta es ${ JSON.parse(body).name } y su clima es ${ JSON.parse(body).climate }`)
        : reject( error );
    });

});


promesa
    .then( json => console.log( json ))
    .catch( error => console.log( error ));
 */



 
