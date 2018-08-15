/* let miObjeto = {
    texto: "Hola",
    numero: 20,
    booleano: true,
    arreglo: [1,2,3],
    objeto: { perro: "Fido" },
    funcion: function (){
        return "Soy una funcion";
    }
};

console.log(miObjeto.funcion());
 */

/* 
 let sueldo_base = 5000;
 let tarifa = 200;
 let horas_extra = 4;

 function calcularSueldo(sueldo, horas, tarifa){
    return sueldo + (horas * tarifa);
 }

 let resultado = calcularSueldo(sueldo_base,horas_extra,tarifa); */

 /* console.log(resultado); */


 //Paradigma Oriantado a Objetos
/* 
 let empleado = {
    sueldo_base: 5000,
    tarifa: 200,
    horas_extra: 4,
    calcularSueldo: function(){
        return this.sueldo_base + ( this.horas_extra * this.tarifa);
    }
 }

 console.log(empleado.calcularSueldo());

  */


  ////////////////

let triangulo = {
    base:5,
    altura: 7,
    perimetro: function(){
    return `El perimetro del triangulo es: ${ this.base + this.base + this.base }`;
    },
    area: function(){
    return `El área del triangulo es: ${ (this.base * this.altura) / 2 }`;
    }
}

let cuadrado = {
    base:3,
    altura: 3,
    perimetro: function(){
    return `El perimetro del cuadrado es: ${ this.base + this.base + this.base + this.base }`;
    },
    area: function(){
    return `El área del cuadrado es: ${ Math.pow(this.base, 2) }`;
    }
}

let rectangulo = {
    base:20,
    altura: 10,
    perimetro: function(){
    return `El perimetro del rectangulo es: ${ this.base + this.base + this.altura + this.altura }`;
    },
    area: function(){
    return `El área del rectangulo es: ${ this.base * this.altura }`;
    }
}

//console.log(rectangulo.perimetro());






//Clases///



class Perro {

    constructor(nombre, raza, edad){
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }

    ladrar(){
        return "Woof, woof";
    }

    comer(comida){
        return `${ this.nombre } esta comiendo ${ comida }`;
    }

}

let ayudanteDeSanta = new Perro("Ayudande  de Santa", "Galgo", 7);

console.log(ayudanteDeSanta.comer("Croquetas"));

let fido = new Perro("Fido", "Salchica", 3);

console.log(fido.comer("Croquetas"));

