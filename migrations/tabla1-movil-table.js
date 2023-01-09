'use strict';

const sequelize = require('../db/db');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movil', {
      id_movil: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.INTEGER
      },
      URL: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movil');
  }
};
