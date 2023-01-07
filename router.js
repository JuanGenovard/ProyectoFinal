
const express = require('express')
const router = express.Router()


const UsuariosRoutes = require('./views/usuariosRoutes')
const authRoutes = require('./views/authRoutes')
const comprasRoutes = require('./views/comprasRoutes')
const movilRoutes = require('./views/movilRoutes')


router.use('/usuarios', UsuariosRoutes)
router.use('/auth', authRoutes)
router.use('/compras', comprasRoutes)
router.use('/movils', movilRoutes)

module.exports = router