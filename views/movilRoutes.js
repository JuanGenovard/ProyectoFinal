const express = require("express");
const router = express.Router();

const movilController = require('../controllers/movilController');

const { isValidRolAdmin, authBearerMiddleware } = require("../middlewares/authMiddleware")

router.get('/', movilController.getAllMovils)

router.get('/:id', movilController.getMovil)

router.delete('/movils/:id', isValidRolAdmin, authBearerMiddleware, movilController.deleteMovilById)

router.post('/newmovil', isValidRolAdmin, authBearerMiddleware, movilController.postNewMovil)

module.exports = router