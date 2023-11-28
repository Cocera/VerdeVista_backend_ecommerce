'use strict';

const bcrypt = require("bcryptjs");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Users', [
      {
        username: 'Alvaro',
        email: 'alcocera@example.com',
        password: bcrypt.hashSync('123456', 10),
        role:'superadmin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Marta',
        email: 'marta@example.com',
        password: bcrypt.hashSync('123456', 10),
        role:'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Sara',
        email: 'sara@example.com',
        password: bcrypt.hashSync('123456', 10),
        role:'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Demis',
        email: 'demis@example.com',
        password: bcrypt.hashSync('123456', 10),
        role:'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Vero',
        email: 'vero@example.com',
        password: bcrypt.hashSync('123456', 10),
        role:'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
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
