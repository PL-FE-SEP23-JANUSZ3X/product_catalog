import express from 'express';
import phoneController from '../controller/phone.controller';

const phoneRouter = express.Router();

phoneRouter.get('/', phoneController.getAll);
phoneRouter.get('/:id', phoneController.getOne);
phoneRouter.get('/pagination/:start-:limit', phoneController.getSome);

export default phoneRouter;
