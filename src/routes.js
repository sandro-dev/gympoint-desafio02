const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'The node server is running! ;)' });
});

module.exports = routes;