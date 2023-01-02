'use strict';
const {DataTypes, Model} = require('sequelize');
const sequelize = require ("../db/db.js")

  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuarios.init({
    id_usuario: { 
      
     type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    nombre: DataTypes.STRING,
    id_rol: DataTypes.INTEGER
  },
  {
    sequelize,
    modelName: 'Usuarios',
  });

  
  module.exports = Usuarios