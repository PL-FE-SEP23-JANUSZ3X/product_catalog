import express from 'express';
import productController from '../controller/product.controller';

const productRouter = express.Router();

productRouter.get('/', productController.getAll);
productRouter.get('/:id', productController.getOne);
productRouter.get('/pagination/:start-:limit', productController.getSome);

export default productRouter;