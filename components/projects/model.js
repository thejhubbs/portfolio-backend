const db = require('../../data/dbConfig.js');

module.exports = {
  find,
  findById,
  getThumbnail,
  getImages,
  getTechnologies,
  add,
  update,
  remove
};



function find() {
  return db('projects')
  .orderBy('project_show_priority')
}

function findById(id) {
  return db('projects')
    .where( 'project_id', id )
    .first();
}

function getThumbnail(id) {
  return db('images').where('image_project_id', id).where('thumbnail', true).first();
}


function getImages(id) {
  return db('images').where('image_project_id', id).where('thumbnail', false)
}


function getTechnologies(id) {
  return db('projects_to_technologies').join('technologies', 'projects_to_technologies.pt_technology_id', 'technologies.technology_id').where('pt_project_id', id)
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
