const express = require('express');

const Technologies = require('./model.js');

const router = express.Router();

const {restricted} = require('../middleware.js')

router.get('/', (req, res) => {
  Technologies.find()
  .then(technologies => {
    res.json(technologies)
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get technologies' });
  });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const technology = await Technologies.findById(id)
  const children = await Technologies.getChildren(id)
  const parent = await Technologies.getParent(technology.parent_id)
  const projects = await Technologies.getProjects(id)

  res.json({...technology, children, parent, projects})
});


router.post('/', restricted, (req, res) => {
  const data = req.body;

  Technologies.add(data)
  .then(technology => {
    res.status(201).json(technology);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new technology.' });
  });
});

router.put('/:id', restricted, (req, res) => {
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

router.delete('/:id', restricted, (req, res) => {
  const { id } = req.params;
      Technologies.remove(id)
      .then(deleted => {
        res.send("Success.")
      })
      .catch(err => { res.status(500).json({ message: 'Failed to delete technology.' }) });
});


module.exports = router;
