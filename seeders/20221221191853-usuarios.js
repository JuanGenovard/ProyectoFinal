'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
      email: "toni@gmail.com",
      contraseña: "123456",
      nombre: "toni",
      id_rol: 1
    },
      {
      email: "Miquel@gmail.com",
      contraseña: "123456",
      nombre: "Miquel",
      id_rol: 2
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};