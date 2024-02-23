import express from 'express';
import phoneController from '../controller/phone.controller';

const phoneRouter = express.Router();

phoneRouter.get('/', phoneController.getAll);
phoneRouter.get('/:phoneId', phoneController.getById);
phoneRouter.get('/:phoneId/recommended', phoneController.getRecommended);

export default phoneRouter;
