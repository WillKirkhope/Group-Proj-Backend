const database = require("./database-connection")

module.exports = {
    list(tableName) {
        return database(tableName).select()
    }
}