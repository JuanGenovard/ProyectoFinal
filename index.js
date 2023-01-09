const express = require ('express');
const app = express();
const router = require('./router');
const PORT = 3001;
app.use(express.json());
const db = require ('./db/db.js')
const cors = require("cors");
require('dotenv').config()

//Config Cors Options aws
var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  };
  app.use(cors(corsOptions));

app.use(router);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el ${PORT}`)

    db.authenticate().then(()=> {
        console.log("Conectados a la DB")
    }).catch(error => {
        console.log('Se ha producido un error: ' + error)
    })

})