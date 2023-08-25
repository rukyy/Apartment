const mongoose = require("mongoose")

const schema = mongoose.Schema


const houseSchema = new schema ({
    address: {type: String , required:true},
    briefdes:{type: String, required:true},
    dimension:{type:String, required:true},
    images:{type:Array}
})

module.exports = mongoose.model("houseInfo", houseSchema)