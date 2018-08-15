const request = require('request');

/* 1.- Hacer una petición a cualquier pokemon y mostrar su(s) tipo(s). */

request('http://pokeapi.co/api/v2/pokemon/1/', function (error, response, body) {

  if( response.statusCode == 200 ){
    let resp = JSON.parse(body);
    //console.log(`El tipo de Pokemon es ${ resp.types[1].type.url }`);

  } else console.log(error);

});

/*
   2.- Hacer una funcion que haga una peticion que busque un libro y traiga el o los autores.
   Ejemplo: peticionLibro(“i robot”)
   http://openlibrary.org/search.json?q=i+robot
*/

let getAuthor = ( book ) => {

    let api = 'http://openlibrary.org/search.json?q=' + book;

    request(api, function (error, response, body) {

    if( response.statusCode == 200 ){

        let books = JSON.parse(body).docs;

        authors = books.map( author  => { return author.author_name } );

        console.log(`Los Autores son  ${ authors }`);

    } else console.log(error);

    });

}

//getAuthor("i+robot");

/*
    3.- Hacer una petición por autor y devolver la lista de sus
    libros (http://openlibrary.org/search.json?author=asimov)
*/

let getBook = ( author ) => {

    let api = 'http://openlibrary.org/search.json?author=' + author;

    request(api, function (error, response, body) {

    if( response.statusCode == 200 ){

        let resp3 = JSON.parse(body);
        let books = resp3.docs;

        libros = books.map(
            ( libro ) => { return libro.title_suggest; }
        );

        console.log(`Los Libros son  ${ libros }`);

    } else console.log(error);

    });

}

//getBook("tolkien");

/*
    4.- Devolver los asteroides que sean potencialmente peligrosos para la tierra de
    la semana pasada hasta hoy.
    (https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-04-16&end_date=2018-04-17&api_key=5NRaoTUZyOTmEBDXjaShiZDi7l7XhtICCEhj3z5i)
*/

let getAsteroides = ( start_date, end_date ) => {

    let api = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + start_date + '&end_date=' + end_date + '&api_key=5NRaoTUZyOTmEBDXjaShiZDi7l7XhtICCEhj3z5i';

    request(api, function (error, response, body) {

    if( response.statusCode == 200 ){

        let resp4 = JSON.parse(body);

        asteroides = resp4.near_earth_objects;
        fechas = [];
        cont = 1;

        for (var propiedad in asteroides) {

            if (asteroides.hasOwnProperty(propiedad)) {
                fechas[cont] = propiedad;
            }

            cont++;
        }

        fechas.forEach( function(valor, indice, array) {

            asteroides = resp4.near_earth_objects[valor];

            var peligrosos = asteroides.filter(function (asteroide) {
                if( asteroide.is_potentially_hazardous_asteroid == true ){
                    console.log(`El asteroide ${ asteroide.name } del día ${ valor } `);
                }
            });

        });

    } else console.log(error);

    });
}

getAsteroides( "2018-08-02", "2018-08-09");

/*
    5.- Hacer una petición a la swapi a un personaje y obtener sus películas.
*/

let getMovies = ( people ) => {

    let api = 'https://swapi.co/api/people/' + people + '/';

    request(api, function (error, response, body) {

    if( response.statusCode == 200 ){

       
        let resp5 = JSON.parse(body);
        let personage = resp5.name;
        let films = resp5.films;

        films.forEach( function(valor, indice, array) {

            request(valor, function (error, response, body) {

                if( response.statusCode == 200 ){

                    let resp6 = JSON.parse(body);
                    let peliculas = resp6.title;

                    console.log(`.- ${ peliculas }`);

                } else console.log(error);

            });

        });

        console.log(`Las Peliculas de ${ personage } son : `);

    } else console.log(error);

    });

}

//getMovies(2 );

/*
    6.- Traer los primeros 151 pokemon de la primera
    generacion y devolver un objeto con el nombre, sus moves,
    tipos, tamaño y peso
*/

 
let getPokemon = ( generation, limit ) => {

    let api = 'http://pokeapi.co/api/v2/pokemon?limit=/' + 2;

    request(api, function (error, response, body) {

    if( response.statusCode == 200 ){

        let pokemones = JSON.parse(body).results;

        pokemones = pokemones.map( poke  => { 
            //console.log(poke.url);
            request(poke.url, function (error, response, body) {

                if( response.statusCode == 200 ){

                    let types = JSON.parse(body).moves;
                    console.log(types);

                } else console.log(error);

            });
        } );

    

    } else console.log(error);

    });
}

//getPokemon(1,2);