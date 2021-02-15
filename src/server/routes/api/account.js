const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send([
      {id: 1, name: 'Joao da Silva', email: 'joaodasilva@gmail.com'},
      {id: 2, name: 'José Souza', email: 'josesouza@gmail.com'}
    ])
});

router.get('/:id', (req, res) => {
  res.send([
    {id: 1, name: 'Joao da Silva', email: 'joaodasilva@gmail.com'},
      {id: 2, name: 'José Souza', email: 'josesouza@gmail.com'}
  ].filter( item => item.id == req.params.id))
});

module.exports = router;