class Construccion {

    constructor(num_puertas, num_ventanas, num_piso, direccion, altura, largo, ancho){
        this.num_puertas = num_puertas;
        this.num_ventanas = num_ventanas;
        this.num_piso = num_piso;
        this.direccion = direccion;
        this.altura = altura;
        this.largo = largo;
        this.ancho = ancho;
        this.cuadrados = 0;
    }

    getMetrosCuadrados(){
        this.cuadrados = `${ this.largo * this.ancho } metros cuadrados`;
        return this.cuadrados;
    }

    getDireccion(){
        return `Tu Direccion es ${ this.direccion }`;
    }

    setDireccion(nuevaDireccion){
        this.direccion = nuevaDireccion;
        return `Tu nueva Direccion es ${ this.direccion }`;
    }

    
}

class Casa extends Construccion {

    constructor(num_puertas, num_ventanas, num_piso, direccion, altura, largo, ancho){
        super(num_puertas, num_ventanas, num_piso, direccion, altura, largo, ancho);
    }   
    
}

class Edificio extends Construccion {

    constructor(num_puertas, num_ventanas, num_piso, direccion, altura, largo, ancho){
        super(num_puertas, num_ventanas, num_piso, direccion, altura, largo, ancho);
    }

}

let geo = new Casa(3,2,3,"Juan Rulfo #4",2,16,8);
let infonavit = new Edificio(3,2,3,"Isla #43",2,10,5);

console.log(
    `${ geo.getDireccion() } Tiene ${ geo.getMetrosCuadrados() }`
);

console.log(
    `${ infonavit.getDireccion() } Tiene ${ infonavit.getMetrosCuadrados() }`
);
