const express = require("express")
const { postHouse } = require("../controller/house")
const router = express.Router()


router.post('/',postHouse)

module.exports  = router