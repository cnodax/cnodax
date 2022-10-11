const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathStorage = `${__dirname}/../is/image`
    cb(null, pathStorage);
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop()
    const filename = `${Date.now()}.${ext}`
    cb(null, filename);
  },
})

const uploadImage = multer({ storage })

module.exports = uploadImage