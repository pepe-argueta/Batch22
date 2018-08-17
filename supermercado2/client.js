const mongoose = require('mongoose');//Se importa el Modulo Mongoose
let URL_MONGODB = 'mongodb://pepe:Dsl2016.*@ds121262.mlab.com:21262/b22_prueba';//URL para conectarse a MongoDB LAB

mongoose.connect(URL_MONGODB);//Hace la Conexión

var Schema   = mongoose.Schema;
var ObjectId = Schema.ObjectId;

//Documento Articulos
const articuloSchema = {
    articulo:    ObjectId,
    nombre:      String,
    precio:      String,
    existencia:  Number,
    descripcion: String
};

//Documento Tickets
const ticketShema = {
    ticket:   ObjectId,
    RFC:      String,
    articulo: {
        type: Schema.ObjectId,
        ref: 'Articulo',
        cantidad: Number
    },
    subtotal: Number,
    iva:      Number,
    total:    Number
};

/* //Documento Items Tickets
const itemTicketSchema = {
    itemTicket: ObjectId,
    cantidad:   number,
    ticket: {
        type: Schema.ObjectId,
        ref:  'Ticket'
    },
    articulo: {
        type: Schema.ObjectId,
        ref:  'Articulo'
    }
} */

var Articulo = mongoose.model('Articulo', articuloSchema);
var Ticket = mongoose.model('Ticket', ticketShema);
//var ItemTicket = mongoose.Model('ItemTicket', itemTicketSchema);

module.exports = { Articulo, Ticket };
