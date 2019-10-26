import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', (req, res) =>
  res.json({ message: 'The node server is running on port: 3333' })
);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

export default routes;
