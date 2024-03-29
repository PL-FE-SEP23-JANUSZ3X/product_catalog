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

const getByQuery: ControllerAction = async(req, res) => {
    const { query } = req.params
    try {
        const allProducts = await productService.getProductsByQuery(query);

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
        const allProductsLength = allProducts.length
        res.send([allProductsLength]);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}

const getRecommended: ControllerAction = async (req, res) => {
    try {
        const itemId = req.params.itemId.toString(); 
        const recommended = await productService.getRecommendedById(itemId);
  
        if (!recommended.length) {
            res.status(404).send('Not Found: The specified entity does not exist');
            return;
        }

        console.log(recommended)
  
        res.send(recommended);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

const getById: ControllerAction = async(req, res) => {
    const { itemId } = req.params
    try {
        const oneProduct = await productService.getProductByID(itemId);

        res.send(oneProduct)
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}

const getSortedProducts: ControllerAction= async (req, res) => {
    try {
        const { productCategory, sortType, start, limit } = req.params
        const { startIndex, limitIndex } = {
            startIndex: +start,
            limitIndex: +limit,
          };
        const items = await productService.sortProducts(productCategory, sortType, startIndex, limitIndex);
        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const productController = {getAll, getById, getByCategory,getRecommended, getSortedProducts, getByQuery};

export default productController;
