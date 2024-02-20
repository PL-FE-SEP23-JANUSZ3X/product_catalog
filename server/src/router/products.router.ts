import express from 'express';
import productController from '../controller/product.controller';

const productRouter = express.Router();

productRouter.get('/', productController.getAll);
productRouter.get('/:itemId', productController.getById);
productRouter.get('/category/:productCategory', productController.getByCategory);
productRouter.get('/search/:query', productController.getByQuery);
productRouter.get('/sort/:productCategory-:sortType-:start-:limit', productController.getSortedProducts);

export default productRouter;
