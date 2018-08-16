const express = require("express")
const router = express.Router()

const queries = require("../db/queries")

router.get('/', (req,res,next) => {
    queries.list('attendees')
    .then(attendees => {
        res.json({attendees})
    })
})

router.use(function(error,request,response,next){
  console.error(error.stack)
  response.status(400).send('Error Something Went Wrong')
})

module.exports = router