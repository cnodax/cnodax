const express = require("express")
const router = express.Router()
const uploader = require("../utils/uploadImage")
// const uploadMiddleware = require("../utils/handleStorage")
// const {validatorGetItem} = require("../validators/storage")
const { createItem } = require("../controllers/images")

// router.get("/", getItems);

// router.get("/:id", validatorGetItem, getItem);

// router.delete("/:id", validatorGetItem, deleteItem)

router.post("/",uploader.single("file"), createItem)

module.exports = router