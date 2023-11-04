'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PayMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PayMethod.belongsTo(models.User);
      PayMethod.hasMany(models.Order)
    }
  }
  PayMethod.init({
    UserId: DataTypes.INTEGER,
    payment_type: DataTypes.STRING,
    account_num: DataTypes.INTEGER,
    expiry: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'PayMethod',
  });
  return PayMethod;
};