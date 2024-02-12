import express from 'express';
import productController from '../controller/product.controller';

const productRouter = express.Router();

productRouter.get('/', productController.getAll);
productRouter.get('/:id', productController.getOne);

export default productRouter;