const express = require("express")
const multer = require("multer")
const upload = multer({dest:'./assets/files'})
const router = express.Router()

router.post('/', upload.single("file"),function(req, res, next){
    console.log(req.file)
    next()
})

module.exports = router