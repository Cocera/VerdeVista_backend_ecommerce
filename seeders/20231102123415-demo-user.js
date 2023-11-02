'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Users', [
      {
        username: 'Paco',
        mail: 'paco@example.com',
        password:'123456',
        mobile:'123456',
        role:'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Marta',
        mail: 'marta@example.com',
        password:'123456',
        mobile:'123456',
        role:'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Sara',
        mail: 'sara@example.com',
        password:'123456',
        mobile:'123456',
        role:'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Demis',
        mail: 'demis@example.com',
        password:'123456',
        mobile:'123456',
        role:'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Vero',
        mail: 'vero@example.com',
        password:'123456',
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
