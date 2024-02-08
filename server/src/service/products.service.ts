import Product from '../model/product.model';

const getAllProducts= async() => {
    return Product.findAll();
};

const productService = {getAllProducts};

export default productService;