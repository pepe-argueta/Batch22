class Persona {

    constructor(nombre, edad, sexo, peso, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return this.peso / Math.pow(this.altura, 2);
    }

    esMayorDeEdad(){
        if(this.edad >= 18){
            return `${ this.nombre } es mayor de Edad`;
        }
    }

    generarRFC(){
        this.rfc = `${ this.nombre }${ this.edad }${ this.sexo }`;
    }

}

let pepe = new Persona("Jose Argueta", 29, "H", 74, 1.64);

pepe.generarRFC();
console.log(pepe.rfc);