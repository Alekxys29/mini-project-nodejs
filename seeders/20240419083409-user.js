'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        id: 3000,
        name: 'U1',
        age: 21,
        password: '123123',
        email: 'u1@kitra.abc',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3001,
        name: 'U2',
        age: 51,
        password: '234234',
        email: 'u2@kitra.abc',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3002,
        name: 'U3',
        age: 31,
        password: '345345',
        email: 'u3@kitra.abc',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3003,
        name: 'U4',
        age: 18,
        password: '456456',
        email: 'u4@kitra.abc',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3004,
        name: 'U4',
        age: 21,
        password: '567567',
        email: 'u4@kitra.abc',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3005,
        name: 'U5',
        age: 35,
        password: '678678',
        email: 'u5@kitra.abc',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
