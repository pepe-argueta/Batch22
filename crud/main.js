const request = require('request');

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com';

//Defino una promesa que encapsule mi peticion
let crearUsuario = new Promise( ( resolve, reject ) => {

    //crear un peticion tipo "POST" usando ek modulo de requeste 
    let URI = '/api/v1/authors/';
    let URL = URL_BASE + URI;
    let jsonSend = {
        "name": "Juan",
        "last_name": "Rulfo",
        "nacionalidad": "MX",
        "biography": "El señor que soñaba con Comala",
        "gender": "M",
        "age": 100
    };

    request.post( { url: URL, formData: jsonSend }, ( error, response, body ) => {
        response.statusCode == 201 
        ? resolve( JSON.parse(body) )
        : reject( response.statusCode, error );
    });

});

/* crearUsuario
    .then( respuesta => console.log( respuesta ))
    .catch( error => console.log( error )); */


/* Obtiene la lista de Usuarios */
let getUsuarios = new Promise( ( resolve, reject ) => {

    //crear un peticion tipo "GET" usando ek modulo de requeste 
    let URI = '/api/v1/authors/';
    let URL = URL_BASE + URI;

    request.get( URL, ( error, response, body ) => {
        response.statusCode == 200 
        ? resolve( JSON.parse(body) )
        : reject( response.statusCode, error );
    });

});

/* getUsuarios
    .then( respuesta => console.log( respuesta ))
    .catch( error => console.log( error )); */


/* Obtiene los detalles de un Usuario */
let getUsuarioById = new Promise( ( resolve, reject ) => {

    //crear un peticion tipo "GET" usando ek modulo de requeste 

    let id = 401;
    let URI = '/api/v1/authors/' + id + '/';
    let URL = URL_BASE + URI

    

    request.get( URL, ( error, response, body ) => {
        response.statusCode == 200 
        ? resolve( JSON.parse(body) )
        : reject( response.statusCode, error );
    });

});

/* getUsuarioById
    .then( respuesta => console.log( respuesta ))
    .catch( error => console.log( error )); */


/* Actualiza los detalles de un Usuario */
let updateUsuarioById = new Promise( ( resolve, reject ) => {

    //crear un peticion tipo "PUT" usando ek modulo de requeste 

    let id = 401;
    let URI = '/api/v1/authors/' + id + '/';
    let URL = URL_BASE + URI
    let jsonUpdate = {
        "name": "Jose",
        "last_name": "pepe",
        "nacionalidad": "MX",
        "biography": "aaaa",
        "gender": "F",
        "age": "20",
        "is_alive": "true"
    };

    request.put( { url: URL, formData: jsonUpdate }, ( error, response, body ) => {
        response.statusCode == 200 
        ? resolve( JSON.parse(body) )
        : reject( response.statusCode, error );
    });

});

/* updateUsuarioById
    .then( respuesta => console.log( respuesta ))
    .catch( error => console.log( error )); */


/* Actualiza los detalles de un Usuario */
let patchUsuarioById = new Promise( ( resolve, reject ) => {

    //crear un peticion tipo "PUT" usando ek modulo de requeste 

    let id = 405;
    let URI = '/api/v1/authors/' + id + '/';
    let URL = URL_BASE + URI;
    let jsonUpdate = {
        "name": "Pepe",
    };

    request.patch( { url: URL, formData: jsonUpdate }, ( error, response, body ) => {
        response.statusCode == 200 
        ? resolve( JSON.parse(body) )
        : reject( response.statusCode, error );
    });

});
/* 
patchUsuarioById
    .then( respuesta => console.log( respuesta ))
    .catch( error => console.log( error )); */

/* Elimina el Usuario */
let deleteUsuarioById = new Promise( ( resolve, reject ) => {

    //crear un peticion tipo "PUT" usando ek modulo de requeste 

    let id = 220;
    let URI = '/api/v1/authors/' + id + '/';
    let URL = URL_BASE + URI;

    request.delete( URL, ( error, response ) => {
        response.statusCode == 204 
        ? resolve( 'Se elimino correctamente' )
        : reject( 'No se puedo eliminar' );
    });

});

deleteUsuarioById
    .then( respuesta => console.log( respuesta ))
    .catch( error => console.log( error ));