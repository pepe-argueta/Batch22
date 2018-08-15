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
        this.nuevaDireccion = "";
    }

    getMetrosCuadrados(){
        this.cuadrados = `${ this.largo * this.ancho } metros cuadrados`;
        return this.cuadrados;
    }

    getDireccion(){
        return this.direccion;
    }
}

class Casa extends Construccion {

    constructor(num_puertas, num_ventanas, num_piso, direccion, altura, largo, ancho){
        super(num_puertas, num_ventanas, num_piso, direccion, altura, largo, ancho);
    }

    setDireccion(nuevaDireccion){
        this.direccion = this.nuevaDireccion;
        return this.direccion;
    }

}

class Edificio extends Construccion {

    constructor(num_puertas, num_ventanas, num_piso, direccion, altura, largo, ancho){
        super(num_puertas, num_ventanas, num_piso, direccion, altura, largo, ancho);
        
    }

    setDireccion(nuevaDireccion){
        this.direccion = this.nuevaDireccion;
        return this.direccion;
    }

}

let geo = new Casa(3,2,3,"Juan Rulfo #4",2,16,8);
let infonavit = new Edificio(3,2,3,"Isla #43",2,10,5);

console.log(
    `Su direcciòn de la Casa es ${ geo.getDireccion() }`
);

console.log(
    `Su direcciòn de la Edificio es ${ infonavit.getDireccion() }`
);
