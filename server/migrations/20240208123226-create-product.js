'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.NUMBER
      },
      category: {
        type: Sequelize.STRING
      },
      itemId: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      fullPrice: {
        type: Sequelize.NUMBER
      },
      price: {
        type: Sequelize.NUMBER
      },
      screen: {
        type: Sequelize.STRING
      },
      capacity: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      ram: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.NUMBER
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};