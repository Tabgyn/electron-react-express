const express = require('express');

const routes = require('./routes');

var server = express();

/**
 * Middlewares
 */
server.use(express.json());

/**
 * Routes
 */
server.use(routes);

module.exports = server;