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
  item.image_project_id = Number.parseInt(item.image_project_id)
  if(item.thumbnail) {
    item.thumbnail = true
    db('images').where('thumbnail', true).andWhere('image_project_id', item.image_project_id).update( {thumbnail: false} ).returning('image_id').then( (ids) => {} )
  } else {
    item.thumbnail = false
  }


  return db('images')
    .insert(item)
    .returning('image_id')
    .then(ids => {
      return findById(ids[0]);
    })
    .catch(err => {console.log(err)});
}

function update(changes, id) {
  if(changes.thumbnail) {
    db('images').where('thumbnail', true).andWhere('image_project_id', changes.image_project_id).andWhereNot('image_id', id).update( {thumbnail: false} ) 
  }

  return db('images')
    .where('image_id', id)
    .update(changes)
    .then(res => {
      return findById(id)
    });
}

function remove(id) {
  return db('images').where('image_id', id).first().then( (res) => {
    if(res.thumbnail) {
      db('images').where('image_project_id', res.image_project_id).first().then( firstImage => {
        db('images').where('image_id', firstImage.image_id).update( {thumbnail: true}).then( () => {})
      })     
    }
    return db('images')
    .where( 'image_id', id )
    .del();
  })
  
}
