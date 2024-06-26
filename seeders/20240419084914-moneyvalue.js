'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('MoneyValues', [
      {
        treasure_id: 100,
        amt: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 101,
        amt: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 102,
        amt: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 103,
        amt: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 104,
        amt: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 105,
        amt: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 106,
        amt: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 107,
        amt: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 108,
        amt: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 109,
        amt: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 110,
        amt: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 111,
        amt: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 112,
        amt: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 113,
        amt: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 114,
        amt: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 115,
        amt: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 116,
        amt: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 117,
        amt: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 100,
        amt: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 101,
        amt: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 102,
        amt: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 103,
        amt: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 107,
        amt: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 108,
        amt: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        treasure_id: 109,
        amt: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('MoneyValues', null, {});
  }
};
