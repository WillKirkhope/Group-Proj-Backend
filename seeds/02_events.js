
exports.seed = function(knex, Promise) {
  return knex('events').del()
    .then(function () {
      return knex('events').insert([
        {organizer: 1,
        name: "Help Old Man McDougle water his Plants",
        lat: 39.756571,
        long: -105.003082,
        description: "This old guy is crotchety, but his plants don't deserve to die!"
      },{organizer: 2,
        name: "Help remove trash around the Platte River",
        lat: 40.087801,
        long: -94.724166,
        description: "People have been littering all over the Platte river"
      },{organizer: 3,
        name: "Help Clean up the local park and build new recycle bins",
        lat: 39.994062,
        long: -105.266763,
        description: "This park has been looking pretty nasty with these punk college students leaving their trash all over the place, help me clean up after these trustfunders!"
      },{organizer: 4,
        name: "Dog Crap Removal at Columbine Knolls Grove Park",
        lat: 39.594617,
        long: -105.064446,
        description: "Lots of dog scat up in here--too much!"
      }
      ]);
    });
};
