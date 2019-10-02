const db = require('../../data/dbConfig.js');

module.exports = {
  find,
  findById,
  findByUsername,
  add,
  update,
  remove
};



function find() {
  return db('users')
}

function findById(id) {
  return db('users')
    .where( 'user_id', id )
    .first();
}

function findByUsername(username) {
  return db('users')
    .where( 'username', username )
    .first();
}

function add(item) {
  return db('users')
    .insert(item)
    .returning('user_id')
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(changes, id) {
  return db('users')
    .where('user_id', id)
    .update(changes)
    .then(res => {
      return findById(id)
    });
}

function remove(id) {
  return db('users')
    .where( 'user_id', id )
    .del();
}
