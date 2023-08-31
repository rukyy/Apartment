require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors");
const agentRoutes = require("./routes/agent_route")
const houseRoutes = require("./routes/house_route")
const multerRoute = require("./routes/multer_route")


// express app
const app = express()

// configuration for bodyPaser
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );


// middle ware 
app.use(cors());
app.use(express.json()) // middleware to pass req containing a body 


app.use((req, res, next) => {
    // console.log(req.body[0])
    next()
})

// routes
app.use('/', agentRoutes)
app.use('/api',houseRoutes)

mongoose.connect(process.env.URI)
    .then(
        () => {
            app.listen(process.env.PORT, () => {
                console.log("listening on port 7000")
            })
        }
    ).catch(
        (error) => { console.log(error) }
    )
