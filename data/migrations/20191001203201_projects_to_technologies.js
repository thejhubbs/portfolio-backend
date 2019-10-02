exports.up = function(knex, Promise) {
  // don't forget the return statement
  return knex.schema
    .createTable('projects_to_technologies', tbl => {
      tbl.increments('project_to_technology_id');
      tbl.integer('pt_project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('pt_technology_id')
          .unsigned()
          .notNullable()
          .references('technology_id')
          .inTable('technologies')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    })
};

exports.down = function(knex, Promise) {
  // drops the entire table
  return knex.schema
    .dropTableIfExists('projects_to_technologies')
};
