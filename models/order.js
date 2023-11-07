'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User);
      Order.belongsTo(models.Address);
      Order.belongsTo(models.PayMethod);
      Order.belongsToMany(models.Product, {through:models.OrderProduct});
    }
  }
  Order.init({
    total_price: DataTypes.FLOAT,
    AddressId: DataTypes.INTEGER,
    PayMethodId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};