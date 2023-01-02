

const usuarios = require("../models/usuarios");
const crypto = require("node:crypto");

function assertValidContraseñaService(pass) {
    if (pass.length < 8) {
      throw new Error("La contraseña debe tener al menos 8 caracteres");
    }
    // validate it has one lower case letter
    if (!pass.match(/[a-z]/)) {
      throw new Error("La contraseña debe tener al menos una letra minúscula");
    }
    // validate it has one upper case letter
    if (!pass.match(/[A-Z]/)) {
      throw new Error("La contraseña debe tener al menos una letra mayúscula");
    }
    // validate it has one number
    if (!pass.match(/[0-9]/)) {
      throw new Error("La contraseña debe tener al menos un número");
    }
  };

async function assertEmailIsUniqueService(email) {
  console.log("Hola soy la gran contraseña"+email)
    // validate email is unique
    const Usuarios = await usuarios.findOne({
      where: {email: email}
  });
    if (Usuarios) {
      throw new Error("El correo electrónico ya está registrado");
    }
  };

async function createUsuariosService(UsuariosBody) {
    delete UsuariosBody.rol;
    const hash = encryptContraseña(UsuariosBody.contraseña);
    UsuariosBody.contraseña = hash;
    const Usuarios = await usuarios.create(UsuariosBody);
    return Usuarios;
  }

function assertEmailIsValid(email) {
    // must validate a valid email
    const mailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return emailRegex.test(email);
    const isValid = email.match(mailRegex);
    if (!isValid) {
      throw new Error("El correo electrónico no es válido");
    }
  }

function encryptContraseña(Contraseña) {
    const hash = crypto
      .createHmac("sha512", 'no salt for now // TODO: REALLY NEED TO ADD SALT?')
      .update(Contraseña)
      .digest("base64");
    return hash;
  }

async function isValidUsuariosAndContraseña(Usuarios, Contraseña) {
    const UsuariosFound = await Usuarios.findOne({
      where: {email: email}
  });
    if (UsuariosFound) {
      const hash = encryptContraseña(Contraseña);
      return hash === UsuariosFound.Contraseña;
    }
    return false;
  }
  
module.exports = {
    assertValidContraseñaService,
    assertEmailIsUniqueService,
    assertEmailIsValid,
    createUsuariosService,
    isValidUsuariosAndContraseña,
    encryptContraseña,
  };