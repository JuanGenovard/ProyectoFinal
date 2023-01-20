const Usuarios = require("../models/usuarios");

const {
    assertValidContraseñaService,
    assertEmailIsUniqueService,
    assertEmailIsValid,
    createUsuariosService,
    encryptContraseña,
  } = require("../Services/authServices")

  const jsonwebtoken = require ("jsonwebtoken"); 
const Roles = require("../models/roles");

  async function authRegisterController(req, res) {
    const body = req.body;
    body.id_rol = 2;

    // validate Contraseña
    try {
      assertValidContraseñaService(body.contraseña);
    } catch (error) {
      res.status(400).json({ message: "Contraseña incorrecta: " + error.message });
      return;
    }
    try {
      assertEmailIsValid(body.email);
    } /* Catching an error. */
    catch (error) {
      res.status(400).json({ message: "Email is invalid: " + error.message });
      return;
    }
    // validate email is unique
    try {
      await assertEmailIsUniqueService(body.email);
    } catch (error) {
      res.status(400).json({
        message: "Email is already registered: " + error.message,
      });
      return;
    }
    // save Usuarios
/* Creating a new user and deleting the password from the response. */
    try {
      const UsuariosCreated = await createUsuariosService(body);
      delete UsuariosCreated.password;
    //   delete UsuariosCreated._id;
      res.status(201).json(UsuariosCreated);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async function authLoginController(req, res) {
    

    try {
      const { email, password } = req.body;
    const UsuariosFound = await Usuarios.findOne({where :{ email: email }});
    if (!UsuariosFound) {
      res.status(401).json({ message: "La constraseña o el email son incorrectos" });
      return;
    }
    const hashedContraseña = encryptContraseña(password);
    if (hashedContraseña !== UsuariosFound.contraseña) {
      res.status(401).json({ message: "La contraseña o el email son incorrectos" });
      return;
    }
  
    const secret = process.env.JWT_SECRET || 'viscasantantoni';
  
    if (secret.length < 10) {
      throw new Error("JWT_SECRET is not set");
    }
    const jwt = jsonwebtoken.sign({
      email: UsuariosFound.email,
      rol: UsuariosFound.id_rol,
      created: Date.now(),
    }, secret);
  
    res.status(200).json({
      message: "Login successful",
      jwt: jwt,
      isAdmin: UsuariosFound.id_rol === 1,
      username: UsuariosFound.nombre
    });
    } catch (error) {
      
    }
  }

  module.exports = {
    authLoginController,
    authRegisterController,
  };