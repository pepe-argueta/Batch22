const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

app.get('/', (req, res) => 
    res.send('<h1>Hello World!</h1>')
);

//Obtener usuarios
app.get('/usuarios/', (req, res) => 
    res.send('<h1>Estas en la Pagina de Usuarios *******</h1>')
);

//Crear usuario
app.post('/usuarios/', (req, res) => {

    let nuevoUsuario = req.body;
    console.log(nuevoUsuario);

    /*
        codigo para acceder la la base de datos
    */

    res
        .status(201)
        .send(nuevoUsuario);
});

//Modificar Usuario
app.put('/usuarios/:param1/:param2/otraPagina/:param3/', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.status(200).send("Usuario actualizado Exitosamente!!");

});

//Eliminar Usuario
app.delete('/usuarios/:uid/', (req, res) => {
    
    res
        .send(req.params.uid)
        .status(204);

});

app.listen(3000, () => 
    console.log('Example app listening on port 3000!')
);