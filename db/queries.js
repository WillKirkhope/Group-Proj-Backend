const database = require("./database-connection")

module.exports = {
    list(tableName) {
        return database(tableName).select()
    },
    read(tableName, id) {
      return database(tableName).select().where('id', id)
    },
    post(tableName, newEvent) {
      return database(tableName)
        .insert(newEvent)
        .returning('*')
        .then(record => record[0])
    },
    update(tableName, id, newEvent) {
      return database(tableName)
        .update(newEvent)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    deleteOne(tableName, id) {
      return database(tableName)
        .delete()
        .where('id', id)
    }
}
