const config = require("../config/config.json")
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(

    process.env.DB_DATABASE || config.production.database,
    process.env.DB_USERNAME || config.production.username,
    process.env.DB_PASSWORD || config.production.password,
    {
        host: process.env.DB_HOST || config.production.host,
        port: process.env.DB_PORT || config.production.port,
        dialect: process.env.DB_DIALECT || config.production.dialect
    }

)

module.exports = sequelize