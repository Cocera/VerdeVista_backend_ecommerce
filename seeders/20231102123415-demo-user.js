'use strict';

const bcrypt = require("bcryptjs");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Users', [
      {
        username: 'Paco',
        mail: 'paco@example.com',
        password: bcrypt.hashSync('123456', 10),
        mobile:'123456',
        role:'superadmin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Marta',
        mail: 'marta@example.com',
        password: bcrypt.hashSync('123456', 10),
        mobile:'123456',
        role:'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Sara',
        mail: 'sara@example.com',
        password: bcrypt.hashSync('123456', 10),
        mobile:'123456',
        role:'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Demis',
        mail: 'demis@example.com',
        password: bcrypt.hashSync('123456', 10),
        mobile:'123456',
        role:'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Vero',
        mail: 'vero@example.com',
        password: bcrypt.hashSync('123456', 10),
        mobile:'123456',
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
