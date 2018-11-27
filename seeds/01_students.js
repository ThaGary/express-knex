
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
          name: 'Gary Anderson',
          fave_animal: 'https://i.imgur.com/lrKyf3y.gif',
          previous_occupation: 'United States Navy',
          hometown_lat: 40.9478,
          hometown_long: 90.3712,
          useless_superpower: 'sleep on command'
        },
        {
          name: 'Josh Scala',
          fave_animal: 'https://secure.img1-fg.wfcdn.com/im/38103834/resize-h600%5Ecompr-r85/2804/28041725/%2527Proportions+of+the+Human+Figure+%2528Vitruvian+Man%2529%2527+by+Leonardo+Da+Vinci+Graphic+Art+on+Wrapped+Canvas.jpg',
          previous_occupation: 'Applications Engineer',
          hometown_lat: 40.959471,
          hometown_long: 74.125202,
          useless_superpower: 'Can telekinetically move rubbage, but only between two trash recepticles.'
          }
      ]);
    });
};
