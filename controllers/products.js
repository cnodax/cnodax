const { matchedData } = require("express-validator");
const { productsModel } = require("../models")
const { handleError } = require("../utils/handleError");

/**
 * Obtener registros!
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const data = await productsModel.findAllData({})
    res.send({ data })
  } catch (e) {
    console.log(e)
    handleError(res, "ERROR_GET_PRODUCTS")
  }
}

/**
 * Obtener un registro
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try{
    req = matchedData(req)
    const {id} = req
    const data = await productsModel.findOneData(id)
    res.send({ data })
  }catch(e){
    console.log(e)
    handleError(res,"ERROR_GET_PRODUCT")
  }
}

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try { 
    const body  = matchedData(req)
    const data = await productsModel.create(body)
    res.send({ data })
  } catch (e) {
    console.log(e)
    handleError(res, "ERROR_CREATE_PRODUCTS")
  }
}

/**
 *  Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
  try {
    const {id, ...body} = matchedData(req)
    const data = await productsModel.findOneData(id)
    if(!data) throw Error(`Product not updated. id: ${id}`)
    
    await data.update(body)
    res.send({ data })
  } catch (e) {
    console.log(e)
    handleError(res, "ERROR_UPDATE_PRODUCT")
  }
}

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try{
    req = matchedData(req)
    const {id} = req
    const data = await productsModel.findById(id)
    if(!data) throw Error(`Product not updated. id: ${id}`)

    await data.destroy()
    res.send({ data })
  }catch(e){
    console.log(e)
    handleError(res,"ERROR_DELETE_PRODUCT")
  }
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
