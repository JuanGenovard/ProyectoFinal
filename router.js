
const express = require('express')
const router = express.Router()


const UsuariosRoutes = require('./views/usuariosRoutes')
const authRoutes = require('./views/authRoutes')


router.use('/usuarios', UsuariosRoutes)
router.use('/auth', authRoutes)

module.exports = router