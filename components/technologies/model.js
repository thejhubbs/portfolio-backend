const db = require('../../data/dbConfig.js');

module.exports = {
  find,
  findById,
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
