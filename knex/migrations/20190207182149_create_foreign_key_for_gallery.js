
exports.up = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.integer('user_id').references('id').inTable('users');
  })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('gallery')
};
