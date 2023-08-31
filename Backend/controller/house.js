const {uppload} = require("../cloudinary_test");
const houseInfo = require("../dbmodel/house_model")

const getHouse = async (req, res) => {
    const { id } = req.params;
}

const getHouses = async (req, res) => {
    const Houses = houseInfo.find({})
    if (!Houses) {
        res.status(404).json({ error: "error occured" })
    }
    res.status(200).json(Houses)
}



const postHouse =async (req, res) => {
        const secure_urls = []
        for (i = 0; i < req.files.length; i++) {
            await uppload(req.files[i]["destination"]+'/'+req.files[i]["filename"])
            .then((result)=>{
                if(!result){
                    console.log("error occured")
                    return res.status(404).json({error:"error occured uploading to cloudinary"})
                }
                // console.log(result)
                secure_urls.push(`${result["secure_url"]}`)
            })
        }
        const body = {address:req.body["file"][0], briefdes:req.body["file"][1], dimension:req.body["file"][2], images:secure_urls}
        // const {images} = req.files
        const post = await houseInfo.create(body)
        if(!post){
            console.log(error)
            return res.status(404).json({error:'error occured'})
        }
        console.log(post)
        res.status(200).json(post)
    }
module.exports = { postHouse }

