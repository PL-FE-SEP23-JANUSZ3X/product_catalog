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

const productController = {getAll};

export default productController;