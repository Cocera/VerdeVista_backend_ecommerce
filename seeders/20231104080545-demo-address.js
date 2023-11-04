'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Addresses', [
      {
        UserId: 1,
        address_line1: 'Address line example 2',
        address_line2: 'Address line example 2',
        city: 'Valencia',
        postal_code: 46100,
        country: 'Spain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 2,
        address_line1: 'Address line example 2',
        address_line2: 'Address line example 2',
        city: 'Madrid',
        postal_code: 42030,
        country: 'Spain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 3,
        address_line1: 'Address line example 2',
        address_line2: 'Address line example 2',
        city: 'Zaragoza',
        postal_code: 42587,
        country: 'Spain',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 4,
        address_line1: 'Address line example 2',
        address_line2: 'Address line example 2',
        city: 'Paris',
        postal_code: 30105,
        country: 'France',
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
