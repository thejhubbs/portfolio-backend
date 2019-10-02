const db = require('../../data/dbConfig.js');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};



function find() {
  return db('projects')
}

function findById(id) {
  return db('projects')
    .where( 'project_id', id )
    .first();
}

function add(item) {
  return db('projects')
    .insert(item)
    .returning('project_id')
    .then(ids => {
      return findById(ids[0]);
    })
}

function update(changes, id) {
  return db('projects')
    .where('project_id', id)
    .update(changes)
}

function remove(id) {
  return db('projects')
    .where( 'project_id', id )
    .del();
}
