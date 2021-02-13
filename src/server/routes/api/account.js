const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send([
      {id: 1, name: 'Flavio Bogila', email: 'flagila@gmail.com'},
      {id: 2, name: 'Alessandro Bogila', email: 'alessandro.bogila@gmail.com'}
    ])
});

router.get('/:id', (req, res) => {
  res.send([
    {id: 1, name: 'Flavio Bogila', email: 'flagila@gmail.com'},
    {id: 2, name: 'Alessandro Bogila', email: 'alessandro.bogila@gmail.com'}
  ].filter( item => item.id == req.params.id))
});

module.exports = router;