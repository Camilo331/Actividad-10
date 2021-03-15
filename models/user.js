/* Modelo para usuarios */
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    code: {type: Number, required: true, unique:true}, /*  tipo de dato, es requerido, es unico */
    userName: {type: String, required: true, unique:false},
    email: {type: String, required: true, unique:true}
})

module.exports = mongoose.model('user', userSchema) /* Nombre con el que se va exportar y la constante que almacena el modelo */
