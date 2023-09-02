const multer = require("multer")

// configuration of multer storage
const multerStorage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './assets/files')
    },
    filename: function(req, file, cb){
        // let ext = path.extname(file.originalname)
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage : multerStorage
})



module.exports = {
    upload
}