const { isValidUsuariosAndContraseñas } = require("../services/authServices");
const jsonwebtoken = require("jsonwebtoken");
const Usuarios = require("../models/Usuarios")


const authBearerMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  
  // 'Bearer 1234'.split(' ') -> ['Bearer','1234']
  const [strategy, jwt] = authorization.split(" ");
  
  try {
    if (strategy.toLowerCase() !== "bearer") {
      throw new Error("Invalid strategy");
    }
    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET || "viscasantantoni");
    const created = payload.created;
    
    const timeElapsed = Date.now() - created;
    const MAX_TIME = Number(process.env.MAX_TIME_JWT_CADUCITY) ||
      1000 * 60 * 60 * 24 * 30; // 30 days
    const isValid = timeElapsed && created && MAX_TIME &&
      (timeElapsed < MAX_TIME);
    if (!isValid) {
      throw new Error("el token ha expirado");
    }


    req.auth = payload;



  } catch (error) {
    res.status(401).json({ message: "No se ha podido autentificar" });
    return;
  }

  next();

};

const isValidRolAdmin = (req, res, next) => {
  const { authorization } = req.headers;
  const [strategy, jwt] = authorization.split(" ");
  const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET || "viscasantantoni");
  if (payload.rol === 1) {
    next();
  } else {
    res.status(403).json({ message: "No se ha podido autentificar" });
  }
}

const isValidUsuario = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization.split(" "))
  const [strategy, jwt] = authorization.split(" ");
  const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET)
  let email = req.params.email
  if (payload.email === email) {
    next();
  } else {
    res.status(403).json({ message: "You are not authorized" });
  }
}


module.exports = { authBearerMiddleware, isValidRolAdmin, isValidUsuario };