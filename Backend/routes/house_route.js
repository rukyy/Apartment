const express = require("express")
const { postHouse } = require("../controller/house")
const router = express.Router()
const multer = require("multer")
const { upload } = require("./multer_route")


// .array("files").."files" this must be the same as that of the formdata that is being passed
router.post('/',upload.array("file"), postHouse)

module.exports  = router