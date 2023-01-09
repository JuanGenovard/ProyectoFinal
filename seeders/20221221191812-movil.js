'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('movil',[
      {
       id_movil: 1,
       nombre:'Samsung',
       color:'Rojo',
       precio: 275,
       URL:'https://cdn-files.kimovil.com/phone_front/0001/02/thumb_1752_phone_front_big.jpeg'
      },
      {
       id_movil: 2,
       nombre:'Samsung 2',
       color:'Verd',
       precio: 325,
       URL:'https://cdn-files.kimovil.com/phone_front/0001/02/thumb_1752_phone_front_big.jpeg'
      },
    ],{})
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
