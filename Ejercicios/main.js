/*
    Hacer una función que convierta de grados
    centígrados a Farenheit
*/

let convertirCetoFa = (centigrados) => {

    let farenheit = ((9/5) * centigrados ) + 32;
    return farenheit.toFixed(2);

}

let centigrados = 37;
console.log(`${ centigrados } Cº es igual a ${ convertirCetoFa( centigrados ) } Fº`);

console.log("================================");
/*
    Hacer una función que muestre la tabla de
    multiplicar de un número
*/

let tablaMultiplicar = (num1) => {

    console.log(`La tabla de Multiplicar del ${ num1 } es : `);
    for(i = 1; i <= 10; i++){
        let resultado = num1 * i;
        console.log(`${ num1 } * ${ i } = ${ resultado }`);
    }

}

let num1 = 3;
tablaMultiplicar(num1);

console.log("================================");
/*
    Leer un arreglo de enteros y sacar su promedio
*/

let leerArreglo = (arreglo) => {
    
    let sumaArreglo = 0;

    for(i = 0; i < arreglo.length; i++){
        sumaArreglo = sumaArreglo + arreglo[i];
    }
    
    let promedio = sumaArreglo / arreglo.length;

    return promedio;

}

let arreglo = [1,2,3,4,5,6,7,8,9];
let textoArreglo = arreglo.toString();

console.log(` El promedio del arreglo ${ textoArreglo } es ${ leerArreglo(arreglo) }`);

console.log("================================");
/*
    Leer el nombre y sueldo de 8 empleados y
    mostrar el nombre y sueldo del empleado
    que más gana
*/

console.log("================================");
/*
    Función que pida N parametros y devuelva
    cuantos parametros se le pasaron
*/

console.log("================================");
/*
    Guardar en un array los 20 primeros
    números pares
*/

let arregloPares = [];
let arrayPares = () => {

    for( i = 1; i <= 40; i++){
        if( i % 2 == 0){
            arregloPares[i] = i;
        }
        //return arregloPares;
    }
}

arrayPares();
let textoArregloPares = arregloPares.toString();
console.log(`Este array contiene los 20 primeros numeros pares ${ textoArregloPares } `);

console.log("================================");
/*
    Hacer una funcion que calcule el tiempo
    necesario para que un automóvil que se
    mueve con una velocidad de 73000 m / h
    recorra una distancia de 120 km.
        (TIEMPO = d / v)
*/



