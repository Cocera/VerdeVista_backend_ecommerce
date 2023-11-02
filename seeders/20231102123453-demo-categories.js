'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Categories', [
      {
        name: 'Cactus',
        description: 'Con o sin espinas, son plantas suculentas, adaptadas a ambientes áridos y desérticos.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Monstera',
        description: 'Plantas de interior conocidas por su apariencia exuberante y sus hojas grandes y perforadas.',
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
