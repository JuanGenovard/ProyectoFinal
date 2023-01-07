const express = require("express");
const router = express.Router();

const movilController = require('../controllers/movilController');

const { isValidRolAdmin, authBearerMiddleware, isValidUsuario } = require("../middlewares/authMiddleware")

router.get('/',authBearerMiddleware, isValidRolAdmin, movilController.getAllMovils)

module.exports = router