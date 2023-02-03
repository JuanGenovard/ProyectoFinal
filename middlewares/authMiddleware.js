const jsonwebtoken = require("jsonwebtoken");



const authBearerMiddleware = async (req, res, next) => {
  /* Destructuring the authorization property from the headers object. */
  const { authorization } = req.headers;


  // 'Bearer 1234'.split(' ') -> ['Bearer','1234']
/* Splitting the string into an array. */
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
  console.log(req.headers)
  const [strategy, jwt] = authorization.split(" ");
  const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET || "viscasantantoni");
  console.log(payload);
  if (payload.rol === 1) {
    next();
  } else {
    res.status(403).json({ message: "No se ha podido autentificar" });
  }
}


module.exports = { authBearerMiddleware, isValidRolAdmin };