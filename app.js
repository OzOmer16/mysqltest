const express = require("express")
const cors = require("cors")
const app = express()
const post = 3030






const planguagesRouter = require("./router/planguageRouter")
 


app.use(cors())
app.use(express.json())
app.use("/planguages",planguagesRouter)



app.get("/", (req,res) => {

    const endpoints = {
        getAllplanguages: "/planguages",
        postPlanguage: "/planguages",
        getOneplanguage: "/planguages/:id",
        uptadeOnePlanguage: "/planguages/:id",
        deleteOnePlanguage: "/planguages/:id"
    }

    res.json({urlEndpoints:endpoints})
})


















app.listen(post, ()=> {
    console.log(`Connected to server on ${post}`)
})

