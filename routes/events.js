const express = require("express")
const router = express.Router()

const queries = require("../db/queries")

app.get('/', (req,res,next) => {  
    res.json({
         message: 'Hello World!'
    }); 
 })