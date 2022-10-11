const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorCreateItem = [
    check("sku").exists().notEmpty().matches(/^(FAL-)[1000000-99999999]{7,8}$/),
    check("name").exists().notEmpty().isLength({min:3, max:50}),
    check("brand").exists().notEmpty().isLength({min:3, max:50}),
    check("size").exists().notEmpty(),
    check("price").exists().notEmpty().isDecimal().isLength({min:1.00, max:99999999.00}),
    (req, res, next) => validateResults(req, res, next)
]

const validatorGetItem = [
    check("id").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorUpdateItem = [
    check("id").exists().notEmpty(),
    check("sku").exists().notEmpty().matches(/^(FAL-)[1000000-99999999]{7,8}$/),
    check("name").exists().notEmpty().isLength({min:3, max:50}),
    check("brand").exists().notEmpty().isLength({min:3, max:50}),
    check("size").exists().notEmpty(),
    check("price").exists().notEmpty().isDecimal().isLength({min:1.00, max:99999999.00}),
    (req, res, next) => validateResults(req, res, next)
]

module.exports = { validatorCreateItem, validatorGetItem}