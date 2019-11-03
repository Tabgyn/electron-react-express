import express from 'express';

import routes from './routes';

/**
 * Application Class
 */
class App {
  /**
   * Application constructor
   */
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  /**
   * Middlewares
   */
  middlewares() {    
    this.server.use(express.json());
  }

  /**
   * Routes
   */
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;