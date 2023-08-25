require("dotenv").config()
const cloudinary = require('cloudinary').v2

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});
// cloudinary.config({ 
//     cloud_name: 'dnr9s3tvw', 
//     api_key: '499616157348382', 
//     api_secret: 'yaeY0AdHEQ3OU0Hd4zH86RGHjf0' 
//   });
  
  
const uppload= async ()=>{
await cloudinary.uploader.upload('./assets/house101.jpg',{folder:"apartment",   
  use_filename:true,
  resource_type:"image"})
.then((results)=>{
    console.log(JSON.stringify(results,null,2))
})
.catch((error)=>{
    console.log(JSON.stringify(error,null,2))
})
}
uppload();
