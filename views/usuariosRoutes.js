const express = require("express");
const router = express.Router();


const usuariosController = require('../controllers/usuariosController')

router.get('/',usuariosController.getAllUsuarios)

router.get('/id/:email',usuariosController.getUsuariosByEmail)



module.exports = router