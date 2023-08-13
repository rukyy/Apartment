const express = require("express")
const router = express.Router()
const { postAgent } = require("../controller/user")

router.post('/', postAgent)


module.exports = router