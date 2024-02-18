import express from 'express';
import productController from '../controller/product.controller';

const productRouter = express.Router();

productRouter.get('/', productController.getAll);
productRouter.get('/:id', productController.getById);
productRouter.get('/category/:productCategory', productController.getByCategory);

export default productRouter;
