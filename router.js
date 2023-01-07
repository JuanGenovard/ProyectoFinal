
const express = require('express')
const router = express.Router()


const UsuariosRoutes = require('./views/usuariosRoutes')
const authRoutes = require('./views/authRoutes')
const comprasRoutes = require('./views/comprasRoutes')


router.use('/usuarios', UsuariosRoutes)
router.use('/auth', authRoutes)
router.use('/Compras', comprasRoutes)

module.exports = router