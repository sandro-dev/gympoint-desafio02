import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';

const routes = new Router();

routes.get('/', (req, res) =>
  res.json({ message: 'The node server is running on port: 3333' })
);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);

export default routes;
