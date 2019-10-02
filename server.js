const express = require('express');
require('dotenv').config();

const server = express();
const cors = require('cors')
server.use(cors());
server.use(express.json());

const ImageRouter = require('./components/images/router.js');
const ProjectRouter = require('./components/projects/router.js');
const ProjectToTechnologyRouter = require('./components/projectsToTechnologies/router.js');
const TechnologyRouter = require('./components/technologies/router.js');
const UserRouter = require('./components/users/router.js');

server.use('/api/images', ImageRouter);
server.use('/api/projects', ProjectRouter);
server.use('/api/projects_to_technologies', ProjectToTechnologyRouter);
server.use('/api/technologies', TechnologyRouter);
server.use('/api/users', UserRouter);



server.get('/', (req, res) => {
  res.send("Jordan Hubbard's Portfolio API Connected");
});

module.exports = server;
