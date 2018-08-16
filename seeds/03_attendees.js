
exports.seed = function(knex, Promise) {
  return knex('attendees').del()
    .then(function () {
      return knex('attendees').insert([
        {neighbor_id: 1, event_id: 2},
        {neighbor_id: 1, event_id: 4},
        {neighbor_id: 2, event_id: 1},
        {neighbor_id: 2, event_id: 2},
        {neighbor_id: 3, event_id: 3},
        {neighbor_id: 3, event_id: 4},
        {neighbor_id: 4, event_id: 1},
        {neighbor_id: 4, event_id: 4},
        {neighbor_id: 5, event_id: 2},
        {neighbor_id: 5, event_id: 3},
        {neighbor_id: 5, event_id: 1},
        {neighbor_id: 5, event_id: 4}
      ]);
    });
};
