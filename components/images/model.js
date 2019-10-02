const db = require('../../data/dbConfig.js');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};



function find() {
  return db('images')
}

function findById(id) {
  return db('images')
    .where( 'image_id', id )
    .first();
}

function add(item) {
  return db('images')
    .insert(item)
    .returning('image_id')
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(changes, id) {
  return db('images')
    .where('image_id', id)
    .update(changes)
    .then(res => {
      return findById(id)
    });
}

function remove(id) {
  return db('images')
    .where( 'image_id', id )
    .del();
}
