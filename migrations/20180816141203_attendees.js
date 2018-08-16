
exports.up = function(knex, Promise) {
  

  return knex.schema.createTable('attendees', attendees => {
    attendees.integer('neighbor_id')
    attendees.integer('event_id')
  })

};

exports.down = function(knex, Promise) {

  return knex.schema.dropTable('attendees')
  
};
