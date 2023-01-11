'use strict';
const {DataTypes, Model} = require('sequelize');
const sequelize = require ("../db/db.js")

  class Compras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      Compras.hasOne(models.moviles, {foreignKey: 'id_movil'});
      Compras.hasOne(models.usuarios, {foreignKey: 'id'});
    }
  }
  Compras.init({
    id_compra: { 
      type: DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
     },
    fecha_compra: DataTypes.DATEONLY,
    emailUsuario: DataTypes.STRING,
    id_movil: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Compras',
  });


  module.exports = Compras