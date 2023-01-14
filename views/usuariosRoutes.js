const express = require("express");
const router = express.Router();
const { isValidRolAdmin, authBearerMiddleware, isValidUsuario } = require("../middlewares/authMiddleware")

const usuariosController = require('../controllers/usuariosController')

// router.get('/',usuariosController.getAllUsuarios)

// router.get('/id/:email',usuariosController.getUsuariosByEmail)

router.put('/update', usuariosController.updateUsuarioById)

// router.delete('/delete/:email',authBearerMiddleware, isValidRolAdmin, usuariosController.deleteUsuarioById)



module.exports = router