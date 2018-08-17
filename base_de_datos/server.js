const express = require('express');
const bodyParser = require('body-parser');

const {
    Alumno,
    Programa
} = require('./client.js');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.send('Estoy funcionando, sí sirvo :D');
})

//Create Programa
app.post('/api/v1/programa', (req,res)=>{
    const {descripcion, duracion} = req.body;
    let nuevoPrograma = Programa({
        descripcion,
        duracion
    })
    nuevoPrograma.save((req,pr)=>{
        res.status(201).send(pr);
    })
});

//Create Alumno
app.post('/api/v1/alumno', (req,res)=>{
    const {nombre, apellidos,edad, programa}=req.body
    let nuevoAlumno=Alumno({
        nombre,
        apellidos,
        edad,
        programa
    });
    nuevoAlumno.save((err,alumno)=>{
      res.status(201).send(alumno);  
    })
});

//Get All Alumnos
app.get('/api/v1/alumno', (req,res)=>{
    Alumno.find({},(err,alumnos)=>{
        Programa.populate(alumnos,{path:'programa'},(err,result)=>{
            res.send(result);
        })
    })
});

//Get One ALumno
app.get('/api/v1/alumno/:id',(req,res)=>{
    let {id}=req.params;
    Alumno.findById(id).exec()
        .then(alumno => 
            Programa.populate(alumno,{path:'programa'},(err,result)=>{
                res.status(200).send(result);
            }))
        .catch(err => res.send(err));
});

//Delete One Alumno
app.delete('/api/v1/alumno/:id',(req,res)=>{
    let {id} = req.params;
    Alumno.findByIdAndRemove(id).exec()
        .then(alumno=> res.status(204).send(alumno))
        .catch(err=>res.send(err))
});

app.put('/api/v1/alumno/:uid',(req,res)=>{
    let {uid} = req.params;
    Alumno.findByIdAndUpdate(uid,{$set:req.body},{new:true}).exec()
        .then(alumno=>res.send(alumno))
        .catch(err=>res.send(err));
})

app.listen(8000, ()=> console.log('Server on port 8000'));