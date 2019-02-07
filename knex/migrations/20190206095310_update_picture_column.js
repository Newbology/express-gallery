
exports.up = function(knex, Promise) {
  return knex.schema.table('gallery', (table)=>{
    table.renameColumn('picture', 'url')
  });
};

exports.down = function(knex, Promise) {
  
};
