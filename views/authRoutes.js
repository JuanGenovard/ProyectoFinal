const express = require("express");
const authRouter = express.Router();


const {
    authLoginController,
    authRegisterController,
} = require("../controllers/authController");


authRouter.post("/login", authLoginController);
authRouter.post("/nuevousuario", authRegisterController);

module.exports = authRouter;