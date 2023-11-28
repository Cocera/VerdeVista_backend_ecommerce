'use strict';

const bcrypt = require("bcryptjs");

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Users', [
      {
        username: 'Alvaro',
        email: 'alcocera@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        role:'superadmin',
        img: 'https://img.freepik.com/free-photo/freedom-concept-with-hiker-mountain_23-2148107064.jpg?w=1800&t=st=1701183341~exp=1701183941~hmac=811b6efab3bc126c4a3e50bae467641b38d430affa26c0d4553556c03541d17f',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Marta',
        email: 'marta@example.com',
        password: bcrypt.hashSync('123456', 10),
        role:'admin',
        img: 'https://img.freepik.com/free-photo/profile-young-redhead-woman-student-with-long-natural-ginger-hair-pale-skin-looking-left-standing-casual-shirt-white-wall_176420-38201.jpg?w=1800&t=st=1701183504~exp=1701184104~hmac=1bbb49adf34e4661a1b09529b3efa19cb7bb8e5558394904efef178376bee2d2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Sara',
        email: 'sara@example.com',
        password: bcrypt.hashSync('123456', 10),
        role:'user',
        img: 'https://img.freepik.com/free-photo/resentful-woman-shot_329181-17466.jpg?w=1800&t=st=1701183549~exp=1701184149~hmac=b68e2de595a94d61832c3882cd22ed79562ff7b5c6617ea773b2c99dcdd1acf5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Demis',
        email: 'demis@example.com',
        password: bcrypt.hashSync('123456', 10),
        role:'user',
        img: 'https://img.freepik.com/free-photo/young-man-looking-up_155003-10420.jpg?w=1800&t=st=1701183495~exp=1701184095~hmac=e1f0733294b13e6a6496c512f812942b404d34f7df024210ae84ee38bea17f45',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Vero',
        email: 'vero@example.com',
        password: bcrypt.hashSync('123456', 10),
        role:'user',
        img: 'https://img.freepik.com/free-photo/freedom-concept-with-hiker-mountain_23-2148107064.jpg?w=1800&t=st=1701183341~exp=1701183941~hmac=811b6efab3bc126c4a3e50bae467641b38d430affa26c0d4553556c03541d17f',
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
