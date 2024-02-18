import Product from '../model/product.model';

const getAllProducts= async() => {

    return Product.findAll();
};

const getByCategory= async(categoryType: string) => {
    return Product.findAll({where: {category : categoryType}});
};

const getProductByID= async(id: string) => {
    return Product.findByPk(id);
};

const productService = {getAllProducts, getProductByID, getByCategory};

export default productService;