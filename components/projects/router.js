const express = require('express');

const Projects = require('./model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.find()
  .then(projects => {
    res.json(projects)
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Projects.findById(id)
  .then(project => {
    if (project) {
      res.json(project)
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch(err => {res.status(500).json({ message: 'Failed to get projects' });});
});


router.post('/', (req, res) => {
  const data = req.body;

  Projects.add(data)
  .then(project => {
    res.status(201).json(project);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project.' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Projects.update(changes, id)
  .then(updatedProject => {
    Projects.findById(id)
    .then(project => {
      res.json(project);
    })
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update project.' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
      Projects.remove(id)
      .then(deleted => {
        res.send("Success.")
      })
      .catch(err => { res.status(500).json({ message: 'Failed to delete project.' }) });
});


module.exports = router;
