const express = require("express")
const { postHouse, getHouse, getHouses } = require("../controller/house")
const router = express.Router()
const multer = require("multer")
const { upload } = require("./multer_route")


// .array("files").."files" this must be the same as that of the formdata that is being passed
router.post('/',upload.array("file"), postHouse)
router.get('/:id',getHouse)
router.get('/', getHouses)

module.exports  = router