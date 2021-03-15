const mongoose = require('mongoose')

const connectToDB = () =>{
    mongoose.set('useCreateIndex', true) /* Me permite crear los indices de mis documentos */

    mongoose.connect('mongodb://localhost:27017/equipoBIT', {
        useNewUrlParser: true, /* Analizar las cadenas de conexion de mongoDB */
        useUnifiedTopology: true /* Elimina la compatibilidad con varias opciones de conexion que ya no son relevantes o obsoletas */
    
    }, (error) =>{ /* Captura un error, palabra utilizada para llamar los errores */
        if (error) { /* Si existe un error */
            console.log('Esto es un Error!!', error)
        } else { /* Si no hay un error */
            console.log('Nos conectamos correctamente...')
        }
    })
}

/* Exportar esta conexion para poderla utilizar en otros archivos */
module.exports = { connectToDB }