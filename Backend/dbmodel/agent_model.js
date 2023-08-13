const mongoose = require("mongoose")

const schema = mongoose.Schema

 const agentschema = new schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    email:{type:String, required:true},
    picname:{type:String, required:true},
    about:{type:String, required:true}
 })

module.exports = mongoose.model("agent", agentschema)