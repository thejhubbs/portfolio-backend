const express = require('express');

const Images = require('./model.js');

const router = express.Router();
const {restricted} = require('../middleware.js')

router.get('/', (req, res) => {
  Images.find()
  .then(images => {
    res.json(images)
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get images' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Images.findById(id)
  .then(image => {
    if (image) {
      res.json(image)
    } else {
      res.status(404).json({ message: 'Could not find image with given id.' })
    }
  })
  .catch(err => {res.status(500).json({ message: 'Failed to get images' });});
});


router.post('/', restricted, (req, res) => {
  const data = req.body;

  Images.add(data)
  .then(image => {
    res.status(201).json(image);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new image.' });
  });
});

router.put('/:id', restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Images.update(changes, id)
  .then(updated => {
    Images.findById(id)
    .then(image => {
      res.json(image);
    })
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update image' });
  });
});

router.delete('/:id', restricted, (req, res) => {
  const { id } = req.params;
      Images.remove(id)
      .then(deleted => {
        res.send("Success.")
      })
      .catch(err => { res.status(500).json({ message: 'Failed to delete image' }) });
});


module.exports = router;
