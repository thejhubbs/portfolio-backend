const express = require('express');

const ProjectsToTechnologies = require('./model.js');

const router = express.Router();
const {restricted} = require('../middleware.js')


router.get('/', (req, res) => {
  ProjectsToTechnologies.find()
  .then(projects_to_technologies => {
    res.json(projects_to_technologies)
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects_to_technologies' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  ProjectsToTechnologies.findById(id)
  .then(project_to_technology => {
    if (project_to_technology) {
      res.json(project_to_technology)
    } else {
      res.status(404).json({ message: 'Could not find project_to_technology with given id.' })
    }
  })
  .catch(err => {res.status(500).json({ message: 'Failed to get projects_to_technologies' });});
});


router.post('/', restricted, (req, res) => {
  const data = req.body;

  ProjectsToTechnologies.add(data)
  .then(project_to_technology => {
    res.status(201).json(project_to_technology);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project_to_technology.' });
  });
});

router.put('/:id', restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  ProjectsToTechnologies.update(changes, id)
  .then(updated => {
    ProjectsToTechnologies.findById(id)
    .then(ptt => {
      res.json(ptt);
    })
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update image' });
  });
});

router.delete('/:id', restricted, (req, res) => {
  const { id } = req.params;
      ProjectsToTechnologies.remove(id)
      .then(deleted => {
        res.send("Success.")
      })
      .catch(err => { res.status(500).json({ message: 'Failed to delete category' }) });
});


module.exports = router;
