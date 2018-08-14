
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', events => {
   events.increments()
   events.string('organizer')
   events.string('name')
   events.float('lat')
   events.float('long')
   events.string('description')
 })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events')
};
