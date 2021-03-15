module.exports = (app) =>{

    const user = require('../controllers/userController')

    app.post('/user/create', user.create) 
    /* Utilizamos el metodo http de express llamado post, creamos la ruta, y le indicamos la funcion que se debe ejecutar en esa ruta */
    app.get('/user/get', user.findAll)
    app.get('/user/getOne/:id', user.findOne) // el :id definio un pathParameter (parametro de ruta)
    app.put('/user/update/:id', user.update)
    app.delete('/user/delete/:id', user.delete)
}