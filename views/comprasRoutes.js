const express = require("express");
const router = express.Router();

const comprasController = require('../controllers/comprasController');

const { authBearerMiddleware } = require("../middlewares/authMiddleware")

router.get('/',authBearerMiddleware, comprasController.getAllCompras)

router.post('/nuevocompras', authBearerMiddleware, comprasController.postNuevoCompra)


module.exports = router