const config = require("../config/config.json")
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.passwoerd,
    {
        host: config.development.host,
        port: config.development.port,
        dialect: config.development.dialect
    }
)

module.exports = sequelize