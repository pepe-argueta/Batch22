const express = require('express');
const bodyParser = require('body-parser');

const {
    Articulo,
    Ticket
} = require('./client.js');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.send('Estoy funcionando, sí sirvo :D');
});

//Create Articulo
app.post('/api/v1/articulo', (req,res) => {
    const { articulo, nombre, precio, existencia, descripcion } = req.body;
    let nuevoArticulo = Articulo({
        articulo,
        nombre,
        precio,
        existencia,
        descripcion
    });

    nuevoArticulo.save( (req, pr) => {
        res.status(201).send(pr);
    });

});

//Get Articulos
app.get('/api/v1/articulo', (req, res) => {
    Articulo.find( {}, (err, articulos) => {
        res.send(articulos);
    })
});

//Create Tickets
app.post('/api/v1/ticket', (req, res) => {

    const { RFC, articulo, subtotal, iva, total } = req.body;
    let nuevoTicket = Ticket({
        RFC,
        articulo,
        subtotal,
        iva,
        total
    });

    nuevoTicket.save( (req, pr) => {
        res.status(201).send(pr);
    });

});

//Get Tickets
app.get('/api/v1/ticket', (req, res) => {
    Ticket.find( {}, (err, tickets) => {
        res.send(tickets);
    })
});

app.listen(8000, ()=> console.log('Server on port 8000'));