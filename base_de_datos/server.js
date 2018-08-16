const express = require('express');
const bodyParser = require('body-parser');

const {
    Alumno,
    Programa
} = require('./client');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Estoy Fucnionando');
});

app.post('/api/v1/programa', (req, res) => {
    const { descripcion, duracion } = req.body;
    let nuevoPrograma = Programa({
        descripcion,
        duracion
    });
    nuevoPrograma.save((req, pr) => {
        res.status(201).send(pr);
    });
});

app.post('/api/v1/alumno', (req, res) => {
    const { nombre, apellidos, edad,  programa } = req.body;
    let nuevoAlumno = Alumno({
        nombre,
        apellidos,
        edad,
        programa
    });
    nuevoAlumno.save((err, alumno) => {
        res.status(201).send(alumno);
    });
});

app.get('/api/v1/alumno', (req, res) => {
    Alumno.find( (err, alumnos) => {
        Programa.populate(alumnos, { path: 'programa' }, (err, result) => {
            res.send(result);
        });
    });
});

app.listen(8000, () => console.log('El server esta ejecutandose en el puerto 8000'));