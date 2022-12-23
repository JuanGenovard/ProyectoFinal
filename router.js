
const express = require('express')
const router = express.Router()


const UsuariosRoutes = require('./views/usuariosRoutes')


router.use('/Usuarios', UsuariosRoutes)

module.exports = router