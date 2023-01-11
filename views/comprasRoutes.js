const express = require("express");
const router = express.Router();

const comprasController = require('../controllers/comprasController');

const { isValidRolAdmin, authBearerMiddleware, isValidUsuario } = require("../middlewares/authMiddleware")

router.get('/id/:email',authBearerMiddleware, isValidUsuario, comprasController.getComprasByEmail)

router.get('/',
// authBearerMiddleware,
//  isValidRolAdmin,
 comprasController.getAllCompras)

router.post('/nuevocompras',authBearerMiddleware, comprasController.postNuevoCompra)


module.exports = router