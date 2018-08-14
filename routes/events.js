const express = require("express")
const router = express.Router()

const queries = require("../db/queries")

router.get('/', (req,res,next) => {  
    queries.list('events')
    .then(event => {
        res.json({event})
    })
})

 module.exports = router