'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'PayMethods', [
      {
        UserId: 1,
        payment_type: 'VISA',
        account_num:'123456789',
        expiry:'2024-04-00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 2,
        payment_type: 'MASTERCARD',
        account_num:'123456789',
        expiry:'2026-05-00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 3,
        payment_type: 'MASTERCARD',
        account_num:'123456789',
        expiry:'2030-10-00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 4,
        payment_type: 'VISA',
        account_num:'123456789',
        expiry:'2033-12-00',
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
