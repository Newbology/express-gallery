
exports.up = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('user_id')
  })
};

exports.down = function(knex, Promise) {
  
};
