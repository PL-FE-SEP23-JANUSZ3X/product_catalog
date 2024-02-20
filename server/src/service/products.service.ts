import { FindOptions, Op } from 'sequelize';
import Product from '../model/product.model';
import SortType from '../types/sortType';

const getAllProducts= async() => {

    return Product.findAll();
};

const getByCategory= async(categoryType: string) => {
    return Product.findAll({where: {category : categoryType}});
};

const getProductByID= async(itemId: string) => {
    return Product.findAll({where : {itemId}});
};

const getProductsByQuerry= async(querry: string) => {
    return Product.findAll({where : {name : {[Op.like]: `%${querry}%`}}});
};

const sortProducts = async (categoryType: string, sortType: string, startIndex: number, limitIndex: number) => {
    let orderOptions:  FindOptions<Product>['order'] = [];
    
    switch(sortType) {
        case SortType.ALPHABETIC:
            orderOptions  = [['name', 'ASC']];
            break;
        case SortType.ALPHABETIC_REVERSE:
            orderOptions  = [['name', 'DESC']];
            break;
        case SortType.OLDEST:
            orderOptions  = [['year', 'ASC']];
            break;
        case SortType.NEWEST:
            orderOptions  = [['year', 'DESC']];
            break;
        case SortType.CHEAPEST:
            orderOptions  = [['price', 'ASC']];
            break;
        case SortType.EXPENSIVE:
            orderOptions  = [['price', 'DESC']];
            break;
        case SortType.HOTPRICES:
            const items = await Product.findAll();
            return items.sort((a, b) => (b.fullPrice - b.price) - (a.fullPrice - a.price));
        default:
            orderOptions  = [['id', 'ASC']];
    }
    
    return await Product.findAll({where: {category : categoryType},  offset: startIndex, limit: limitIndex, order: orderOptions});
};

const productService = {getAllProducts, getProductByID, getByCategory, sortProducts, getProductsByQuerry};

export default productService;