const express = require("express");
const router = express.Router();
const { authBearerMiddleware } = require("../middlewares/authMiddleware")

const usuariosController = require('../controllers/usuariosController')


router.put('/update', authBearerMiddleware, usuariosController.updateUsuarioById)




module.exports = router