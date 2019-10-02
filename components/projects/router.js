const express = require('express');

const Projects = require('./model.js');

const router = express.Router();
const {restricted} = require('../middleware.js')

router.get('/', (req, res) => {
  Projects.find()
  .then(projects => {
    res.json(projects)
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const project = await Projects.findById(id)
  const thumbnail = await Projects.getThumbnail(id)
  const images = await Projects.getImages(id)
  const technologies = await Projects.getTechnologies(id)

  res.json({...project, thumbnail, images, technologies})

});


router.post('/', restricted, (req, res) => {
  const data = req.body;

  Projects.add(data)
  .then(project => {
    res.status(201).json(project);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project.' });
  });
});

router.put('/:id', restricted, (req, res) => {
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

router.delete('/:id', restricted, (req, res) => {
  const { id } = req.params;
      Projects.remove(id)
      .then(deleted => {
        res.send("Success.")
      })
      .catch(err => { res.status(500).json({ message: 'Failed to delete project.' }) });
});


module.exports = router;
