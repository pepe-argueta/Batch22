class Cuenta {

    constructor(titular, cantidad){
        this.titular = titular;
        this.cantidad = cantidad;
    }

    ingresar(monto){
        let saldo = this.cantidad + monto;
        if(saldo >= 10 && saldo <= 900){
            return `Ingresaste $${ monto } Tu nuevo Saldo es ${ saldo }`;
        } else {
            return `El Saldo de la cuenta no esta Permitido`;
        }
    }

    retirar(monto){
        let saldo = this.cantidad - monto;
        if(saldo >= 10 && saldo <= 900){
            return `Retiraste $${ monto } Tu nuevo Saldo es ${ saldo }`;
        } else {
            return `El Saldo de la cuenta no esta Permitido`;
        }
    }

}

let pepe = new Cuenta("Jose Argueta", 100);


console.log(pepe);