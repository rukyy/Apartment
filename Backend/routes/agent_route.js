const express = require("express")
const router = express.Router()
const { postAgent } = require("../controller/agent")

router.post('/', postAgent)


module.exports = router