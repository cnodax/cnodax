const { sequelize } = require("../config/mysql")
const { DataTypes } = require("sequelize")

const Images = sequelize.define(
  "images",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },        
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    principal: {
      type: DataTypes.TINYINT,
      allowNull: true
    }    
  },
  {
    timestamps: true,
  }
);


Images.find = Images.findAll
Images.findById = Images.findByPk

module.exports = Images
