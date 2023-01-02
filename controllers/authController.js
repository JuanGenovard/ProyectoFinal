const Usuarios = require("../models/Usuarios");

const {
    // assertValidContraseñaService,
    // assertEmailIsUniqueService,
    // assertEmailIsValid,
    // createUsuariosService,
    encryptContraseña,
  } = require("../services/authServices")

  const jsonwebtoken = require ("jsonwebtoken"); 

  async function authLoginController(req, res) {
    

    try {
      const { email, contraseña } = req.body;
    const UsuariosFound = await Usuarios.findOne({where :{ email: email }});
    if (!UsuariosFound) {
      res.status(401).json({ message: "La constraseña o el email son incorrectos" });
      return;
    }
    const hashedContraseña = encryptContraseña(contraseña);
    if (hashedContraseña !== UsuariosFound.contraseña) {
      res.status(401).json({ message: "La contraseña o el email son incorrectos" });
      return;
    }
  
    const secret = process.env.JWT_SECRET || 'viscasantantoni';
        console.log(secret)
  
    if (secret.length < 10) {
      throw new Error("JWT_SECRET is not set");
    }
  
    const jwt = jsonwebtoken.sign({
    //   uuid: UsuariosFound.uuid,
      email: UsuariosFound.email,
      created: Date.now(),
      rol: UsuariosFound.id_rol,
    }, secret);
  
    res.status(200).json({
      message: "Login successful",
      jwt: jwt,
    });
    } catch (error) {
      console.error(error);
      
    }
  }

  module.exports = {
    authLoginController,
    // authRegisterController,
  };