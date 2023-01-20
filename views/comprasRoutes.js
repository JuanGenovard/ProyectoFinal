const express = require("express");
const router = express.Router();

const comprasController = require('../controllers/comprasController');

const { authBearerMiddleware, isValidRolAdmin } = require("../middlewares/authMiddleware")

router.get('/', authBearerMiddleware, isValidRolAdmin, comprasController.getAllCompras)

router.post('/nuevocompras', authBearerMiddleware, comprasController.postNuevoCompra)


module.exports = router