const express = require("express")
const router = express.Router()
const { validatorCreateItem, validatorGetItem } = require("../validators/products")
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/products")
const uploader = require("../utils/uploadImage")

router.get("/", getItems) 

router.get("/:id",validatorGetItem, getItem) 

// router.post("/", validatorCreateItem, uploader.single("file"), createItem)
router.post("/", validatorCreateItem, createItem)

router.put("/:id", validatorCreateItem, validatorGetItem, updateItem) 

router.delete("/:id", validatorGetItem, deleteItem) 

module.exports = router
