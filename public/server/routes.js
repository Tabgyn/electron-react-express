const { Router } = require('express');

const routes = new Router();

routes.get('/', function(req, res) {
  res.send('Electron + React + Express');
});

module.exports = routes;