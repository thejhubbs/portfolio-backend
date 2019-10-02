exports.up = function(knex, Promise) {
  // don't forget the return statement
  return knex.schema
    .createTable('images', tbl => {
      tbl.increments('image_id');
      tbl.text('image_name', 128).notNullable();
      tbl.text('image_description').notNullable();
      tbl.boolean('thumbnail');
      tbl.integer('image_project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex, Promise) {
  // drops the entire table
  return knex.schema
    .dropTableIfExists('images')
};
