'use strict';

const tabletData = require('../src/apiData/tablets.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transformedtabletData = tabletData.map(tablet => ({
      ...tablet,
      capacityAvailable: tablet.capacityAvailable,
      colorsAvailable: tablet.colorsAvailable,
      images: tablet.images,
      description: JSON.stringify(tablet.description),
      cell: tablet.cell,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('Tablets', transformedtabletData, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Tablets', null, {});
  }
};