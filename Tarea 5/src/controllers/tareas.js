
const modelo = require('./../models/tarea');
const TareasController={
    listar:(req, res)=>{
        modelo.find({})
            .then(tareas=>{
                res.status(200).send(tareas);
            })
            .catch(error=>{
                res.status(400).send('Algo salio mal');
            });
    },
    ver:(req,res)=>{
        const id = req.params.id;
        modelo.findById(id)
            .then(tarea=>{
                res.status(200).send(tarea);
            })
            .catch(error=>{
                res.status(400).send('No se encontró la tarea con id '+id);
            })
    },
    crear:(req,res)=>{
        let tareaNueva = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            status: req.body.status,
            fecha: Date.now()
        };
        modelo(tareaNueva).save()
            .then(tarea=>{
                res.status(201).send(tarea);
            })
            .catch(error=>{
                res.status(400).send('No se pudo crear la tarea '+tareaNueva.titulo);
            })
    },
    actualizar:(req,res)=>{
        const id = req.params.id;
        let tareaActualizada = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            status: 'actualizado'
        }

        modelo.findByIdAndUpdate(id, tareaActualizada, {new:true})
            .then(tarea=>{
                res.status(200).send(tarea);
            })
            .catch(error=>{
                res.status(400).send('No se pudo actualizar la tarea con id '+id);
            })
    },
    eliminar:(req,res)=>{
        const id = req.params.id;
        modelo.findByIdAndDelete(id)
            .then(tarea=>{
                res.status(200).send(tarea);
            })
            .catch(error=>{
                res.status(400).send('No se encontró para eliminar la tarea con id '+id);
            })
    }
}
module.exports = TareasController;