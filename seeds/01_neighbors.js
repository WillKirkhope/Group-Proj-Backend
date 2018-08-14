
exports.seed = function(knex, Promise) {
  return knex('neighbors').del()
    .then(function () {
      return knex('neighbors').insert([
        {username: "joshrobbs",
        password: "turtle",
        firstname: "Josh",
        lastname:  "Robbs",
        lat: 39.758913,
        long: -105.001704,
        image: "https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        profile: "I have always wondered how to help my neighbors!"
      },{username: "joshbardsley",
        password: "something",
        firstname: "Josh",
        lastname:  "Bardsley",
        lat: 39.648206,
        long: -104.987964,
        image: "https://motor-stars.com/wp-content/uploads/2015/05/Porsche-918-Ownership-First-Impressions.jpg",
        profile: "Community service is my favorite thing in the world"
      },{username: "willk",
        password: "ninja",
        firstname: "Will",
        lastname:  "Kirkhope",
        lat: 40.014984,
        long: -105.270546,
        image: "http://www.humorandmemes.com/wp-content/uploads/2017/01/025-FUNNY-CAT-MEME.jpg",
        profile: "I like helping people out during my retirement and would love to help out at your next event!"
      },{username: "benaustin",
        password: "worm",
        firstname: "Ben",
        lastname: "Austin",
        lat: 39.589273,
        long:  -105.064843,
        image:  "https://us-east-1.tchyn.io/snopes-production/uploads/2015/04/fredrogers.jpg?resize=865%2C452",
        profile: "I want the best community eva!"
      },{username: "ciarangg",
        password: "cheeran",
        firstname: "Ciaran",
        lastname:  "Guha-Gilford",
        lat: 39.589273,
        long: -105.001704,
        image: "https://pixabay.com/en/pug-dog-pet-animal-puppy-cute-801826/",
        profile: "man, i sure do luv community service"
      }
      ]);
    });
};
