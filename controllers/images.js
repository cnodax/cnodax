const { matchedData } = require("express-validator")
const { imagesModel } = require("../models");
const { handleError } = require("../utils/handleError");
const PUBLIC_URL = process.env.PUBLIC_URL
/**
 * Obtener registros!
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const data = await imagesModel.find({})
    res.send({ data })
  } catch (e) {
    console.log(e)
    handleError(res, "ERROR_GET_IMAGES")
  }
}

/**
 * Obtener un registro
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try{
    req = matchedData(req);
    const {id} = req;
    const data = await imagesModel.findById(id);
    res.send({ data });
  }catch(e){
    handleError(res,"ERROR_GET_IMAGE")
  }
}

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const { body, file} = req
    console.log(file)
    const fileData = {
      filename: file.filename,
      url:`${PUBLIC_URL}/${file.filename}`

    }
    const data = await imagesModel.create(fileData);
    res.status(201)
    res.send({ data })
  } catch (e) {
    console.log(e)
    handleError(res, "ERROR_CREATE_IMAGES")
  }
};

/**
 *  Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
  try {
    const {id, ...body} = matchedData(req);
    const data = await imagesModel.findOneAndUpdate(
      id, body
    );
    res.send({ data });
  } catch (e) {
    handleError(res, "ERROR_UPDATE_IMAGES");
  }
}

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try{
    req = matchedData(req);
    const {id} = req;
    const deleteResponse = await imagesModel.delete({_id:id});
    const data = {
      deleted: deleteResponse.matchedCount
    }
    
    res.send({data});
  }catch(e){
    console.log(e)
    handleError(res,"ERROR_DELETE_IMAGE")
  }
}

module.exports = {createItem}
