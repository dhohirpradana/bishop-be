'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Promo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Promo.init({
    name: DataTypes.STRING,
    productId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    promoCode: DataTypes.STRING,
    start: DataTypes.DATE,
    due: DataTypes.DATE,
    percent: DataTypes.INTEGER,
    nominal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Promo',
  });
  return Promo;
};