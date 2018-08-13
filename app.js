const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const port = process.env.PORT || 9000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req,res,next) => {  
    res.json({
         message: 'Hello World!'
    }); 
 })

app.listen(port, () => {
    console.log(`I am listening on ${port}`)
})