'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require ("../db/db.js")

class Roles extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Roles.init({
  id_rol: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  tipo_rol: DataTypes.STRING
}, {
  sequelize,
  modelName: 'roles',
});

module.exports = Roles