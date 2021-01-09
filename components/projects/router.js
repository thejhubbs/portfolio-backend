const express = require('express');

const Projects = require('./model.js');

const router = express.Router();
const { restricted } = require('../middleware.js')

router.get('/', async (req, res) => {

  let projects = await Projects.find()


  projects = projects.map(async (p) => {

    let thumbnail = await Projects.getThumbnail(p.project_id)

    if (thumbnail) { p = { ...p, ...thumbnail } }
    
    return p
    
  })

  projects = await Promise.all(projects)

  res.json(projects)

});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  let project = await Projects.findById(id)

  const thumbnail = await Projects.getThumbnail(id)
  if(thumbnail) { project = {...project, thumbnail} }

  const images = await Projects.getImages(id)
  project = {...project, images} 

  const technologies = await Projects.getTechnologies(id)
  project = {...project, technologies} 

  res.json(project)

});


router.post('/', restricted, (req, res) => {
  const data = req.body;

  Projects.add(data)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
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
    .catch(err => {
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
