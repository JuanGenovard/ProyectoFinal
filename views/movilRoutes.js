const express = require("express");
const router = express.Router();

const movilController = require('../controllers/movilController');

const { isValidRolAdmin, authBearerMiddleware, isValidUsuario } = require("../middlewares/authMiddleware")

router.get('/', movilController.getAllMovils)

router.get('/:id', movilController.getMovil )

module.exports = router