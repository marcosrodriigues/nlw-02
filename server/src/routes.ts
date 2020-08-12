import express from 'express';
import ClassesController from './controller/ClassesController';
import ConnectionController from './controller/ConnectionsController';

const routes = express.Router();

const classesController = new ClassesController();
const connectionController = new ConnectionController();

routes.post('/classes', classesController.create)
routes.get('/classes', classesController.index)

routes.get('/connections', connectionController.index)
routes.post('/connections', connectionController.create)

export default routes;