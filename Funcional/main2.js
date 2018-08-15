/* 

let saludar = ( mensaje, formato ) => {
    formato(mensaje);
}


let mayusculas = (mensaje) => {
    console.log( mensaje.toUpperCase() );
}

let minusculas = (mensaje) => {
    console.log( mensaje.toLowerCase() );
}



saludar("Hola a Todos",mayusculas);
saludar("Hola a Todos",minusculas); */


//FILTER  Obtiene el objeto dependiendo la condicion

/* let animales = [
    { nombre: "Heladio",  especie: "tortuga" },
    { nombre: "Jose",     especie: "tigre" },
    { nombre: "Carlos",   especie: "cuyo"},
    { nombre: "Fabiola",  especie: "tortuga" },
    { nombre: "Mauricio", especie: "cuyo" },
    { nombre: "Rogelio",  especie: "pato"}
];


let cuyos = []; */
/* 
for( let i = 0; i < animales.length; i++ ){
    if( animales[i].especie == "cuyo"){
        cuyos.push(animales[i]);
    }
}
 */
//console.log(cuyos);

/* 
cuyos = animales.filter( ( animal ) => {
    return animal.especie == "cuyo";
});

console.log(cuyos); */



//MAP

let animales = [
    { nombre: "Heladio",  especie: "tortuga" },
    { nombre: "Jose",     especie: "tigre" },
    { nombre: "Carlos",   especie: "cuyo"},
    { nombre: "Fabiola",  especie: "tortuga" },
    { nombre: "Mauricio", especie: "cuyo" },
    { nombre: "Rogelio",  especie: "pato"}
];


let patos = [];



patos = animales.map( 
    ( animal ) => { return animal.nombre; }
);


console.log( patos );




