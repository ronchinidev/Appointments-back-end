import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import multer from 'multer';
import multerConfig from './config/multer';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentControler from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Routes with authentication
routes.use(authMiddleware); //só vale para as rotas abaixo

routes.put('/users', UserController.update);
routes.get('/providers', ProviderController.index);
routes.get('/appointments', AppointmentControler.index);
routes.post('/appointments', AppointmentControler.store);
routes.delete('/appointments/:id', AppointmentControler.delete);
routes.post('/files', upload.single('file'), FileController.store);
routes.get('/schedule', ScheduleController.index);
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

export default routes;
