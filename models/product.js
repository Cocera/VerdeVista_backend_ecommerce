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
      Product.hasMany(models.Review);
      Product.belongsToMany(models.Order, {through: 'OrderProducts'});
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    stock: DataTypes.INTEGER,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};