class Electrodomestico {

    constructor(consumo_energetico,color,peso){
        this.consumo_energetico = consumo_energetico;
        this.color = color;
        this.peso = peso;
        this.precio = 0;
    }
    

}

class Lavadora extends Electrodomestico {

    constructor(consumo_energetico,color,peso,carga){
        super(consumo_energetico,color,peso);
        this.carga = carga;
    }

    precioFinal(){
        this.precio = this.consumo_energetico * this.carga;
        return this.precio;
    }
}

let mabe = new Lavadora(100,"Roja","12kg",50);

mabe.precioFinal();

console.log(
    mabe.precio
);



class Maestro {

}

class Fisica {

}


class Musica {


}

class Matematicas {

    
}
