exports.up = function(knex, Promise) {
  // don't forget the return statement
  return knex.schema
    .createTable('technologies', tbl => {
      tbl.increments('technology_id');
      tbl.text('technology_name', 128).notNullable();
      tbl.text('technology_experience').notNullable();
      tbl.text('technology_hex_color').notNullable();
      tbl.integer('parent_id')
        .unsigned()
        .references('technology_id')
        .inTable('technologies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex, Promise) {
  // drops the entire table
  return knex.schema
    .dropTableIfExists('technologies')
};
