import express from 'express';
import phoneController from '../controller/phone.controller';

const phoneRouter = express.Router();

phoneRouter.get('/', phoneController.getAll);
phoneRouter.get(
  '/pagination/:sortType-:start-:limit',
  phoneController.getSortedPhones,
);
phoneRouter.get('/:phoneId', phoneController.getById);

export default phoneRouter;
