import express from 'express';
import phoneController from '../controller/phone.controller';

const phoneRouter = express.Router();

phoneRouter.get('/', phoneController.getAll);
phoneRouter.get('/:id', phoneController.getOne);

export default phoneRouter;