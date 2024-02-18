import Product from '../model/product.model';

const getAllProducts= async() => {

    return Product.findAll();
};

const getByCategory= async(categoryType: string) => {
    const filter = {}

    return Product.findAll({where: {category : categoryType}});
};

const getOneProduct= async(id: string) => {

    return Product.findByPk(id);
};

const productService = {getAllProducts, getOneProduct, getByCategory};

export default productService;