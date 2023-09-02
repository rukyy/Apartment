const mongoose = require("mongoose")
const agent = require("../dbmodel/agent_model")
const { uppload } = require("../cloudinary_test")


const getAgent = async(req, res) =>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid){
        return  res.status(404).json({error: "Invalid ID"})
    }
    const aagent = await agent.findById(id)
    if(!aagent){
        res.status(404).json({error:"Not found"})
    }
    return res.status(200).json(aagent)
}

const getAgents = async(req, res) =>{
    const get_agents=await agent.find({}).sort({createdAt : -1})
    if(!get_agents){
        return res.status(404).json({error:"error occured while loading"})
    }
    return res.status(200).json({get_agents})
}

 const postAgent = async(req, res) =>{
    console.log(req.file)
    let secure_url = ""
    await uppload(req.file["destination"]+'/'+req.file["filename"]).then((result)=>{
        if(!result){
            res.status(404).json({message:"error"})
        }
        secure_url= result["secure_url"]
    })
    const body ={firstname:req.body["file"][0],lastname:req.body["file"][1],email:req.body["file"][2],picname:secure_url, about :req.body["file"][3]}
 
    const post = await agent.create(body)
    if(!post){
        return res.status(404).json({error:"error occured"})
    }
    res.status(200).json({post})
 }


 module.exports = {
    postAgent,
    getAgent ,
    getAgents
}