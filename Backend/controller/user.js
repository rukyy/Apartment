const mongoose = require("mongoose")
const agent = require("../dbmodel/agent_model")




 const postAgent = async(req, res) =>{
    const {firstname, lastname, email, picname, about} = req.body
    const post = await agent.create({firstname, lastname,email,picname,about})
    if(!post){
        return res.status(404).json({error:"error occured"})
    }
    res.status(200).json({post})
 }


 module.exports = {postAgent}