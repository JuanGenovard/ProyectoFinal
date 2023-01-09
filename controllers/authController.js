const Usuarios = require("../models/Usuarios");

const {
    assertValidContraseñaService,
    assertEmailIsUniqueService,
    assertEmailIsValid,
    createUsuariosService,
    encryptContraseña,
  } = require("../services/authServices")

  const jsonwebtoken = require ("jsonwebtoken"); 

  async function authRegisterController(req, res) {
    const body = req.body;
    body.id_rol = 2;

    // validate Contraseña
    try {
        console.log(body.contraseña)
      assertValidContraseñaService(body.contraseña);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Contraseña incorrecta: " + error.message });
      return;
    }
    // validate email is valid
   /* A function that allows you to execute a block of code and if an error occurs, it will be caught
   by the catch block. */
    try {
      assertEmailIsValid(body.email);
    } /* Catching an error. */
    catch (error) {
      console.error(error);
      res.status(400).json({ message: "Email is invalid: " + error.message });
      return;
    }
    // validate email is unique
    try {
        console.error(body.email)
      await assertEmailIsUniqueService(body.email);
    } catch (error) {
      console.error(error);
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
      console.log(body)
    //   delete UsuariosCreated._id;
      res.status(201).json(UsuariosCreated);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }

  async function authLoginController(req, res) {
    

    try {
      console.log(req.body)
      const { email, password } = req.body;

      console.log(email)
      console.log(password)
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
    authRegisterController,
  };