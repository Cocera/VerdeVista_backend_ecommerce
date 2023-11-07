'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Products', [
      {
        name: 'Rhipsalis',
        description: 'El cactus de las mil caras',
        stock: '20',
        price: 15,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Monstera Deliciosa',
        description: 'La de siempre, la que no falla',
        stock: '50',
        price: 20,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Monkey Mask',
        description: 'Crece sin parar, lo que significa que tendrás un suministro interminable de esquejes para compartir',
        stock: '35',
        price: 18,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Viejito',
        description: 'Sus puas parecen canas, pero cuidado que pinchan',
        stock: '45',
        price: 15,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Monstera Obliqua',
        description: 'Esta es una de las variedades más complicadas y raras de monstera',
        stock: '10',
        price: 39,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Asiento de suegra',
        description: 'Forma globosa, con la parte superior aplanada, y muchas espinas amarillas que lo recubren',
        stock: '20',
        price: 9,
        CategoryId: 2,
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
