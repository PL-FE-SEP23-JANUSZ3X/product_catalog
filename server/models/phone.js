'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Phone.init({
    id: DataTypes.STRING,
    namespaceId: DataTypes.STRING,
    name: DataTypes.STRING,
    capacityAvailable: DataTypes.STRING,
    capacity: DataTypes.STRING,
    priceRegular: DataTypes.NUMBER,
    priceDiscount: DataTypes.NUMBER,
    colorsAvailable: DataTypes.STRING,
    color: DataTypes.STRING,
    images: DataTypes.STRING,
    description: DataTypes.JSON,
    screen: DataTypes.STRING,
    processor: DataTypes.STRING,
    resolution: DataTypes.STRING,
    processor: DataTypes.STRING,
    ram: DataTypes.STRING,
    camera: DataTypes.STRING,
    zoom: DataTypes.STRING,
    cell: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Phone',
  });
  return Phone;
};