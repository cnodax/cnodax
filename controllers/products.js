const { matchedData } = require("express-validator");
const { productsModel, imagesModel } = require("../models")
const { handleError } = require("../utils/handleError");
const PUBLIC_URL = process.env.PUBLIC_URL
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
    // TODO - luego de crear el producto asociar las imagenes
    // if(data){  
    //   const { file} = req
    //   const fileData = {
    //     filename: file.filename,
    //     url:`${PUBLIC_URL}/${file.filename}`,
    //     principal: 1,
    //     producto_id: data.id
    //   }
    //   const dataf = await imagesModel.create(fileData)
    //   if(!dataf) throw Error(`Image not created to product: ${id}`)   
    // }
    res.send({data})
  } catch (e) {
    console.info(e)
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
