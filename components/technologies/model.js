const db = require('../../data/dbConfig.js');

module.exports = {
  find,
  findById,
  getChildren,
  getParent,
  getProjects,
  add,
  update,
  remove
};



function find() {
  return db('technologies')
}

function findById(id) {
  return db('technologies')
    .where( 'technology_id', id )
    .first();
}


function getChildren(id) {
  return db('technologies').where('parent_id', id)
}


function getParent(parent_id) {
  return db('technologies').where('technology_id', parent_id)
}


function getProjects(id) {
  return db('projects_to_technologies').join('projects', 'projects_to_technologies.pt_project_id', 'projects.project_id').where('pt_technology_id', id)
}



function add(item) {
  return db('technologies')
    .insert(item)
    .returning('technology_id')
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(changes, id) {
  return db('technologies')
    .where('technology_id', id)
    .update(changes)
    .then(res => {
      return findById(id)
    });
}

function remove(id) {
  return db('technologies')
    .where( 'technology_id', id )
    .del();
}
