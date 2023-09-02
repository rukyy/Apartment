const multer = require("multer")
// const uppload = require("/Users/D_maestro/Desktop/web dev projects/Apartment/Backend/assets/files")

// configuration of multer storage
const multerStorage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "/Users/D_maestro/Desktop/web dev projects/Apartment/Backend/assets/files")
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