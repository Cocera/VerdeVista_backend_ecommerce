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
        img: 'https://images.pexels.com/photos/2215534/pexels-photo-2215534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        second_img: 'https://images.pexels.com/photos/1029596/pexels-photo-1029596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Monstera Deliciosa',
        description: 'La de siempre, la que no falla',
        stock: '50',
        price: 20,
        CategoryId: 2,
        img: 'https://images.pexels.com/photos/1029596/pexels-photo-1029596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        second_img: 'https://images.pexels.com/photos/2215534/pexels-photo-2215534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Monkey Mask',
        description: 'Crece sin parar, lo que significa que tendrás un suministro interminable de esquejes para compartir',
        stock: '35',
        price: 18,
        CategoryId: 2,
        img: 'https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        second_img: 'https://images.pexels.com/photos/2215534/pexels-photo-2215534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Viejito',
        description: 'Sus puas parecen canas, pero cuidado que pinchan',
        stock: '45',
        price: 15,
        CategoryId: 1,
        img: 'https://images.pexels.com/photos/4973060/pexels-photo-4973060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        second_img: 'https://images.pexels.com/photos/2086862/pexels-photo-2086862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Monstera Obliqua',
        description: 'Esta es una de las variedades más complicadas y raras de monstera',
        stock: '10',
        price: 39,
        CategoryId: 2,
        img: 'https://images.pexels.com/photos/2086862/pexels-photo-2086862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        second_img: 'https://images.pexels.com/photos/2215534/pexels-photo-2215534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Asiento de suegra',
        description: 'Forma globosa, con la parte superior aplanada, y muchas espinas amarillas que lo recubren',
        stock: '20',
        price: 9,
        CategoryId: 2,
        img: 'https://images.pexels.com/photos/1011302/pexels-photo-1011302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        img: 'https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
