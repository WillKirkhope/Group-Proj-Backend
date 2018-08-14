const database = require("./database-connection")

module.exports = {
    list(tableName) {
        return database(tableName).select()
    },
    read(id) {
      return database(tableName).select().where('id', id)
    },
    post(newEvent) {
      return database(tableName)
        .insert(newEvent)
        .returning('*')
        .then(record => record[0])
    },
    update(id, newEvent) {
      return database(tableName)
        .update(newEvent)
        .where('id', id)
        .returning('*')
        .then(record => record[0])
    },
    delete() {
      return database(tableName)
        .delete()
        .where('id', id)
    }
}
