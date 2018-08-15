/* 
    1. Crea una funcion que reciba como parametro una cadena de palabras y 
    devuelva la cadena de caracteres modificadas en mayusculas y minusculas.
    Entrada:[“Hola amigos”, “cinta roja cdmx y gdl”,” yei” ]
    Salida:[“HOLA amigos”, “CINTA roja CDMX y GDL”,”YEI”]
*/




let cadena = ( msg1, msg2, msg3 ) => {

    return separarCadena( msg1, msg2, msg3 );

}

let separarCadena = ( msg1, msg2, msg3 ) => {
    
    separador = " ";
    arregloMsg1 = msg1.split(separador);
    arregloMsg2 = msg2.split(separador);
    arregloMsg3 = msg3.split(separador);
    return convertirCadena( arregloMsg1, arregloMsg2, arregloMsg3);

}

let convertirCadena = ( arregloMsg1, arregloMsg2, arregloMsg3 ) => {
    
    for (i = 0; i < arregloMsg1.length; i++){
        if( i % 2 == 0){
            arregloMsg1[i] = arregloMsg1[i].toUpperCase();
        } else {
            arregloMsg1[i] = arregloMsg1[i].toLowerCase();
        }   
    }

    return unirCadena( arregloMsg1, arregloMsg2, arregloMsg3 );

}

let unirCadena = ( arregloMsg1, arregloMsg2, arregloMsg3 ) => {

    


}



console.log(cadena("Hola amigos", "cinta roja cdmx y gdl", "yei"));
console.log("======================================");

/*
    2. Hacer un arreglo de 4 cantidades de tiempo en minutos [120, 80, 200, 100], y 
    agarrar sólo las que son mayores a dos horas (hacer la comparación en horas)
*/

let arregloNums = [120, 80, 200, 100];

let twoHours = arregloNums.filter( 
    ( minutes ) => { return ( minutes / 60 ) >= 2 ; }
);

console.log(twoHours);
console.log("======================================");

/*
    3. A partir de esta lista [1, 3, 5, 7, 9], 
    multiplicar todos los elementos por 7, y después sólo traer 
    los que son menores a 30
*/


let arregloNums2 = [1, 3, 5, 7, 9];

let numeros  = arregloNums2.filter( 
    ( nums ) => { return ( nums * 7 ) < 30 ; }
);

console.log(numeros);