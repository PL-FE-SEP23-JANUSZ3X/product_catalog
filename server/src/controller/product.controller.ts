import productService from '../service/products.service';


import { ControllerAction } from '../utils/types';

const getAll: ControllerAction = async(req, res) => {
    try {
        const allProducts = await productService.getAllProducts();

        if (!allProducts) {
            res.status(404).send('Not Found: The specified entity does not exist');

            return;
        }
        res.send(allProducts);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}

const getByCategory: ControllerAction = async(req, res) => {
    const { productCategory } = req.params
    try {
        const allProducts = await productService.getByCategory(productCategory);

        if (!allProducts) {
            res.status(404).send('Not Found: The specified entity does not exist');

            return;
        }
        res.send(allProducts);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}

const getById: ControllerAction = async(req, res) => {
    const { id } = req.params
    try {
        const oneProduct = await productService.getProductByID(id);

        res.send(oneProduct)
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}

const productController = {getAll, getById, getByCategory};

export default productController;