const express = require('express');

const Technologies = require('./model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Technologies.find()
  .then(technologies => {
    res.json(technologies)
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get technologies' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Technologies.findById(id)
  .then(technology => {
    if (technology) {
      res.json(technology)
    } else {
      res.status(404).json({ message: 'Could not find technology with given id.' })
    }
  })
  .catch(err => {res.status(500).json({ message: 'Failed to get technologies' });});
});


router.post('/', (req, res) => {
  const data = req.body;

  Technologies.add(data)
  .then(technology => {
    res.status(201).json(technology);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new technology.' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Technologies.update(changes, id)
  .then(updatedTech => {
    Technologies.findById(id)
    .then(technology => {
      res.json(technology);
    })
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update technology' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
      Technologies.remove(id)
      .then(deleted => {
        res.send("Success.")
      })
      .catch(err => { res.status(500).json({ message: 'Failed to delete technology.' }) });
});


module.exports = router;
