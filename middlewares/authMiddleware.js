const { isValidUsuariosAndContraseñas } = require("../services/authServices");
const jsonwebtoken = require("jsonwebtoken");
const Usuarios = require("../models/Usuarios")

// const authBasicMiddleware = async (req, res, next) => {
//   const { authorization } = req.headers;
//   let isAuthorized = false;
//   const [type, token] = authorization.split(" ");
//   if (type !== "basic") {
//     res.status(401).json({ message: "No se ha podido autentificar" });
//     return;
//   }
//   const UsuariosAndPass = atob(token);
//   const [Usuarios, Contraseñas] = UsuariosAndPass.split(":");

//   if (await isValidUsuariosAndContraseñas(Usuarios, Contraseñas)) {
//     isAuthorized = true;
//   }

//   if (isAuthorized) {
//     next();
//   } else {
//     res.status(401).json({ message: "No se ha podido autentificar" });
//   }
// };

const authBearerMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  // 'Bearer 1234'.split(' ') -> ['Bearer','1234']
  const [strategy, jwt] = authorization.split(" ");
  try {
    if (strategy.toLowerCase() !== "bearer") {
      throw new Error("Invalid strategy");
    }
    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET || "tomatesasesinos");

    const created = payload.created;

    const timeElapsed = Date.now() - created;
    const MAX_TIME = Number(process.env.MAX_TIME_JWT_CADUCITY) ||
      1000 * 60 * 60 * 24 * 30; // 30 days
    const isValid = timeElapsed && created && MAX_TIME &&
      (timeElapsed < MAX_TIME);

    if (!isValid) {
      throw new Error("el token ha expirado");
    }

    // expose the payload to the next middlewares and controllers
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
  const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET || "tomatesasesinos");
  // console.log(payload)
  if (payload.rol === 1) {
    next();
  } else {
    res.status(403).json({ message: "No se ha podido autentificar" });
  }
}

const isValidUsuario = async (req, res, next) => {
  const { authorization } = req.headers;
  const [strategy, jwt] = authorization.split(" ");
  const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET)
  let email = req.params.email
  console.log(req.params.email)
  console.log("payloadmail", payload.email)
  if (payload.email === email) {
    next();
  } else {
    res.status(403).json({ message: "You are not authorized" });
  }
}


module.exports = { authBearerMiddleware, isValidRolAdmin, isValidUsuario };