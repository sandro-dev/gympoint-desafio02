import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) =>
  res.json({ message: 'The node server is running on port: 3333' })
);

export default routes;
