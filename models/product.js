'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category);
      Product.belongsToMany(models.Order, {through:models.OrderProduct});
    }
  }
  Product.init({
    name:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { 
        notNull: { message: 'Name required' }
      }
    },
    description:  {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: { 
        notNull: { message: 'Description required' }
      }
    },
    stock:  {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: { 
        notNull: { message: 'Stock required' }
      }
    },
    price:  {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: { 
        notNull: { message: 'Price required' }
      }
    },
    img:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { 
        notNull: { message: 'Image required' }
      }
    },
    CategoryId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { 
        notNull: { message: 'Category id required' }
      }
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};