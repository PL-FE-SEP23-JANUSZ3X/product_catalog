import express from 'express';
import phoneController from '../controller/phone.controller';

const phoneRouter = express.Router();

phoneRouter.get('/', phoneController.getAll);
phoneRouter.get('/:id', phoneController.getOne);
phoneRouter.get('/pagination/:sortType-:start-:limit', phoneController.getSortedPhones);

export default phoneRouter;
