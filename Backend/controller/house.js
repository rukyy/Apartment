const houseInfo = require("../dbmodel/house_model") 

const getHouse = async(req, res) =>{
    const {id} = req.params;
}

const getHouses = async(req, res)=>{
        const Houses = houseInfo.find({})
        if(!Houses){
            res.status(404).json({error:"error occured"})
        }
        res.status(200).json(Houses)
}

const postHouse =async (req, res)=>{
    const {address, briefdes, dimension}= req.body
    const {images} = req.files
    const post = await houseInfo.create({address,briefdes,dimension,images})
    if(!post){
        return res.status(404).json({error:'error occured'})
    }
    res.status(200).json(post)
}
module.exports = {postHouse}

