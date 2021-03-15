/* Conjunto de funciones que me permitiran modificar, agregar etc sobre la coleccion usuarios */

const User = require('../models/user') /* Requiero el modelo de mi documento */

/* Promesa- no es sabe en que momento esa funcion va a terminar.  Nos puede regresar un objeto como error o como okay*/

exports.create = (req, res) => {

    const nUser = new User({ /* En una constante voy a guardar el modelo diligenciado */
        code: req.body.code,
        userName: req.body.userName,
        email: req.body.email
    })

    nUser.save().then( /* Then sirve para Generar instrucciones en caso de exito */

        data => { /* Este data lo podemos cambiar por otro, es un parametro que se puede modificar */
            res.send(data) /* Me envie o me devuelva el caso exitoso. */
        }
    ).catch( /* En caso de un error o no existosa, me devuelva un caso */
        error => {
            res.status(500).send({
                message: error.message || 'Error al crear el usuario' /* Me muestra el mensaje Error al crear el usuario */
            })
        }
    )
}
exports.findAll = (req, res) => { // una funcion para encontrar todos los documentos
    User.find({}) // tomamos el modelo de user, utilizamos el metodo find
        // el metodo find recibe unos parametros que condicionan la busqueda cuando el objeto que recibe esta vacio.
        .then((data) => {
            res.send(data) //en caso de exito envio la informacion.
        })
        .catch((err) => {
            res.status(500).send({ message: "Hubo un error en el servidor" })
        })
}
exports.findOne = (req, res) => {
    const id = req.params.id
    User.findById(id)
        .then((data) => {
            if (!data) {
                res.status(404).send({ message: "no se encontro el usuario con el id" + id })
            } else {
                res.send(data)
            }
        })
        .catch((err) => {
            // console.log('err', err)
            res.status(500).send({ message: "error en el servidor" })
        })
}
exports.update = (req,res) =>{
    const id = req.params.id
    if(!req.body){
        return res.status(400).send({message:"El cuerpo de la peticion no puede ir vacio"})
    }
    User.findByIdAndUpdate(id,req.body,{ useFindAndModify:false })
        .then((data) =>{
            if(!data){
                res.status(404).send({message:"No se puede editar un usuario inexistente"})
            } else {
                res.send({message:"El usuario se ha actualizado"})
            }
        })
        .catch((err) =>{
            res.status(500).send({message:"Hubo un problema en el servidor"})
        })
}
exports.delete = (req,res) =>{
    const id = req.params.id

    User.findByIdAndRemove(id)
        .then((data) =>{
            if (!data) {
                res.status(404).send({message:"no se puede elmiminar el documento porqueno se encontró"})
            } else {
                res.send({message:"Se elimino el documento exitosamente"})
            }
        })
        .catch((err) =>{
            res.status(500).send({message:"hubo un error de sevidor"})
        })
}