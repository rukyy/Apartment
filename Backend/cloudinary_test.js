require("dotenv").config()
const cloudinary = require('cloudinary').v2

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure : true
});

  

const uppload= async (filepath)=>{
return await cloudinary.uploader.upload(filepath ,{folder:"apartment",   
  use_filename:true,
  resource_type:"image"})
.then((results)=>{
  return (results)
})
.catch((error)=>{
    return (error)
})
}

module.exports= {uppload}
