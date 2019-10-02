const db = require('../../data/dbConfig.js');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};



function find() {
  return db('projects_to_technologies')
}

function findById(id) {
  return db('projects_to_technologies')
    .where( 'project_to_technology_id', id )
    .first();
}

function add(item) {
  return db('projects_to_technologies')
    .insert(item)
    .returning('project_to_technology_id')
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(changes, id) {
  return db('projects_to_technologies')
    .where('project_to_technology_id', id)
    .update(changes)
    .then(res => {
      return findById(id)
    });
}

function remove(id) {
  return db('projects_to_technologies')
    .where( 'project_to_technology_id', id )
    .del();
}
