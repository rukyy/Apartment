require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const agentRoutes = require("./routes/agent_route")


// express app
const app = express()

// middle ware 
app.use(express.json()) // middleware to pass req containing a body 
app.use((req, res, next) => {
    console.log(req.method, req.path,req.body)
    next()
})

// routes
app.use('/', agentRoutes)


mongoose.connect(process.env.URI)
    .then(
        () => {
            app.listen(process.env.PORT, () => {
                console.log("listening on port 6000")
            })
        }
    ).catch(
        (error) => { console.log(error) }
    )
