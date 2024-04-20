import express from 'express';

const estudiantes = [
    {id: 1, nombre: 'Juan', edad: 20},
    {id: 2, nombre: 'Maria', edad: 22},
    {id: 3, nombre: 'Pedro', edad: 21},
    {id: 4, nombre: 'Ana', edad: 23}
]


const app = express();

//Agregan los Middlewares
app.use(express.json());


//Trae todos los estudiantes
app.get('/estudiantes',(req, response)=>{
    response.status(200).json({data:estudiantes});
})

//Trae un estudiantes por Id
app.get('/estudiantes/:id',(req, res)=>{
    const id = req.params.id;
    const estudiante = estudiantes.find(e => e.id == id);
    if(estudiante==undefined){
        res.status(404).json({data:'No se encontro el estudiante'})
    }
    res.status(200).json({data:estudiante})
})

app.post('/estudiantes',(request, response)=>{
    console.log(request.body)
    estudiantes.push(request.body);
    response.status(201).json({data:'Estudiante creado'});
})



const port = 3000;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`)}
);

