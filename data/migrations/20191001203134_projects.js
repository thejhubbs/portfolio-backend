exports.up = function(knex, Promise) {
  // don't forget the return statement
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('project_id');
      tbl.text('project_name', 128).notNullable();
      tbl.text('project_description').notNullable();

      tbl.text('project_details')
      tbl.text('project_development')
      tbl.text('project_reflection')
      tbl.text('project_future')

      tbl.integer('project_show_priority')

    })
};

exports.down = function(knex, Promise) {
  // drops the entire table
  return knex.schema
    .dropTableIfExists('projects')
};
