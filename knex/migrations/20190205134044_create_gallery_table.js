exports.up = function(knex, Promise) {
  return knex.schema.createTable('gallery', (table) => {
    table.increments();
    table.string('author').notNullable();
    table.string('picture').notNullable();
    table.string('body').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tasks');
}