const express = require("express")
const router = express.Router()
const { postAgent, getAgent, getAgents } = require("../controller/agent")
const { upload } = require("./multer_route")


// .array("files").."files" this must be the same as that of the formdata that is being passed
router.post('/',upload.single("file"),postAgent)
router.get('/:id',getAgent)
router.get('/',getAgents)


module.exports = router