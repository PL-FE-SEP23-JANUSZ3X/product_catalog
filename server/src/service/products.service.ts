import { FindOptions, Op, col, fn } from 'sequelize';
import Product from '../model/product.model';
import SortType from '../types/sortType';
import sequelize from 'sequelize/lib/sequelize';

const getAllProducts= async() => {

    return Product.findAll();
};

const getByCategory= async(categoryType: string) => {
    return Product.findAll({where: {category : categoryType}});
};

const getProductByID= async(itemId: string) => {
    return Product.findOne({ where: { itemId: itemId } });
};

const getProductsByQuery= async(query: string) => {
    return Product.findAll({
        limit: 5,
        where: {
            name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', '%' + query.toLocaleLowerCase() + '%')
        }
    })
}

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
            return items.sort((a, b) => ((b.fullPrice - b.price) - (a.fullPrice - a.price)));
        default:
            orderOptions  = [['id', 'ASC']];
    }
    
    return await Product.findAll({where: {category : categoryType},  offset: startIndex, limit: limitIndex, order: orderOptions});
};

const getRecommendedById = async (itemId: string) => {
    const product = await Product.findOne({
        where: {
            itemId: itemId,
        }
    });

    if (!product) {
        return [];
    }

    const recommended = await Product.findAll({
        where: {
            itemId: { [Op.ne]: itemId },
            color: product.color,
        },
        limit: 5,
    });

    if (recommended.length < 5) {
        const additionalRecommended = await Product.findAll({
            where: {
                itemId: { [Op.ne]: itemId },
            },
            limit: 5 - recommended.length,
        });

        recommended.push(...additionalRecommended);
    }

    return recommended;
};

const productService = {getAllProducts, getProductByID, getByCategory, getRecommendedById, sortProducts, getProductsByQuery};

export default productService;
