const express = require('express') /* Importar, requerir todas las funcionalidades de express y almacenarlas en una constante */

var cors = require('cors') /* Permite que le frontend pueda acceder a la funcionalidad de la api */
const bodyParser = require('body-parser') /* Trabajar con el cuerpo peticion, Json */
const { connectToDB } = require('./db') /* Importamos el archivo DB */

const app = express() /* Instanciamos express, llamando todas las funcionalidades de express por medio del objeto */

app.use(cors())
app.use(bodyParser.json()) /* Con express voy a utilizar esto */
connectToDB() /* Ejecutamos la funcion que esta en el archivo DB */

require('./routes/userRoutes')(app) /* Se envia la informacion de la carga de express a ese archivo */

app.listen(3000, ()=>{
    console.log('Nos hemos conectado!!')
})