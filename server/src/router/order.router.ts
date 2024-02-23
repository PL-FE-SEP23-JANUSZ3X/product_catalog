import express from 'express';
import orderController from '../controller/order.controller';

const orderRouter = express.Router();

orderRouter.post('/', orderController.createOrder);
orderRouter.get('/all', orderController.getAll)
export default orderRouter;
