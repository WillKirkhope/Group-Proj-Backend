const knex = require("knex")
const environment = (process.env.NODE_ENV || 'development')
const config = require("../knexfile")
const database = knex(config[environment])

module.exports = database

