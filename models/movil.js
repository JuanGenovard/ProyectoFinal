'use strict';
const {DataTypes, Model} = require('sequelize');
const sequelize = require ("../db/db.js")
// module.exports = (sequelize, DataTypes) => {
  class Moviles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      static associate(models) {
    }
  }
  Moviles.init({
    id_movil: { 
      type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
     },
    nombre: DataTypes.STRING,
    color: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    URL: DataTypes.STRING
  }, {
    timestamps: false,
    sequelize,
    tableName: 'movil',
    modelName: 'Moviles',
  });

// };

module.exports = Moviles