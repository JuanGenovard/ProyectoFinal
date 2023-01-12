'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Compras', {
      id_compra: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha_compra: {
        type: Sequelize.DATEONLY
      },
      emailUsuario: {
        type: Sequelize.STRING
      },
      id_movil: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        default:"2008-10-03",
        type: Sequelize.DATEONLY
      },
      updatedAt: {
        default:"2008-10-03",
        type: Sequelize.DATEONLY
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: "Usuarios",
          key: "id_usuario"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
    },
    id_movil: {
      type: Sequelize.INTEGER,
      references: {
        model: "movil",
        key: "id_movil"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
  } 
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Compras');
  }
};
