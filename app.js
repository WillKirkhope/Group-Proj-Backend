const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const port = process.env.PORT || 9000
const events = require("./routes/events")


app.use(cors())
app.use(bodyParser.json())

app.use("/events",events)


app.listen(port, () => {
    console.log(`I am listening on ${port}`)
})