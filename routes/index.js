const express = require("express");
const fs = require("fs")
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    //TODO products.js [products, js]
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file)//TODO products
    if(name !== 'index'){
        console.log(`Cargando ruta ${name}`)
        router.use(`/${name}`,require(`./${file}`)) //TODO http://localhost:3000/api/products
    }
})

module.exports = router