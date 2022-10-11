const { sequelize } = require("../config/mysql")
const { DataTypes } = require("sequelize")
const Image = require("./images")

const Products = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },    
    sku: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^(FAL-)[1000000-99999999]{7,8}$/
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [3,50]
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [3,50]
    },
    size: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      min: 1,
      max: 99999999
    }
  },
  {
    timestamps: true,
  }
)

Products.findAllData = function () {
  Products.hasMany(Image, {
    foreignKey: "product_id",
    as: "images",
  })
  return Products.findAll({ include: "images" })
}

Products.findOneData = function (id) {
  Products.hasMany(Image, {
    foreignKey: "product_id", as: "image",
  })
  return Products.findOne({ where: { id }, include: "image" })
}

Products.find = Products.findAll
Products.findById = Products.findByPk

module.exports = Products