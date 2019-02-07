
exports.up = function(knex, Promise) {
  return knex.schema.table('gallery', (table) => {
    table.string('url', 255).alter();
    table.string('body', 2048).alter();
  })
};

exports.down = function(knex, Promise) {

};
