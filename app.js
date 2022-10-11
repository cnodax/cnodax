require("dotenv").config()
const express = require("express")
const cors = require("cors")
const {dbConnectMySql} = require('./config/mysql')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.static("is/image"))

app.use("/api", require("./routes"))

app.listen(port, () => {
  console.log(`Tu app esta lista por http://localhost:${port}`)
})

dbConnectMySql()