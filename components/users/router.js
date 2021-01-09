const express = require('express');

const Users = require('./model.js');

const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const {restricted} = require('../middleware.js')

router.post('/login', (req, res) => {
  let {username, password} = req.body
  console.log(username, password)

  Users.findByUsername(username)
  .then(user => {
    if(user && bcrypt.compareSync(password, user.password)){
      const token = generateToken(user)
      res.status(200).json({message: "Welcome!", token: token, user: user})
    } else {
      res.status(500).json({message: "Invalid Credentials."})
    }
  })
  .catch(error => {
    res.status(500).json({message: "Invalid Credentialse."})
  })
})

router.get('/', restricted, (req, res) => {
  Users.find()
  .then(users => {
    res.json(users)
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get users' });
  });
});

router.get('/:id', restricted, (req, res) => {
  const { id } = req.params;

  Users.findById(id)
  .then(user => {
    if (user) {
      res.json(user)
    } else {
      res.status(404).json({ message: 'Could not find user with given id.' })
    }
  })
  .catch(err => {res.status(500).json({ message: 'Failed to get users' });});
});


router.post('/', restricted, (req, res) => {
  const data = req.body;
  data.password = bcrypt.hashSync(data.password, 10)

  Users.add(data)
  .then(user => {
    res.status(201).json(user);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new user.' });
  });
});

router.put('/:id', restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Users.update(changes, id)
  .then(updated => {
    Users.findById(id)
    .then(user => {
      res.json(user);
    })
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update user' });
  });
});

router.delete('/:id', restricted, (req, res) => {
  const { id } = req.params;
      Users.remove(id)
      .then(deleted => {
        res.send("Success.")
      })
      .catch(err => { res.status(500).json({ message: 'Failed to delete user' }) });
});


function generateToken(user) {
  const payload = {
    subject: user.user_id, // sub in payload is what the token is about
    user: user
  };

  const options = {
    expiresIn: '1d', // show other available options in the library's documentation
  };

  // extract the secret away so it can be required and used where needed
  return jwt.sign(payload, process.env.JWT_SECRET, options); // this method is synchronous
}

module.exports = router;
