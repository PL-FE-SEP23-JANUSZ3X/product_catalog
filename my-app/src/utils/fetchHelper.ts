import axios from 'axios';
import { OrderDataType } from '../types/OrderDataType';

// const BASE_URL = process.env.REACT_APP_API;

// productRouter.get('/', productController.getAll);
// productRouter.get('/:id', productController.getById);
// productRouter.get('/category/:productCategory', productController.getByCategory);
// productRouter.get('/sort/:productCategory-:sortType-:start-:limit', productController.getSortedProducts);

export const getProducts = async () => {
  const response = await axios.get(
    `https://phone-catalog-f9j4.onrender.com/products/`,
  );
  return response.data;
};

export const getProduct = async (itemId: string) => {
  const response = await axios.get(
    `https://phone-catalog-f9j4.onrender.com/products/${itemId}`,
  );
  return response.data;
};

export const getRecommended = async (productId: string) => {
  const response = await axios.get(
    `https://phone-catalog-f9j4.onrender.com/products/${productId}/recommended`,
  );
  return response.data;
};

export const getSortedProducts = async (
  category: string,
  sortType: string,
  start: number,
  limit: number,
) => {
  const response = await axios.get(
    `https://phone-catalog-f9j4.onrender.com/products/sort/${category}-${sortType}-${start}-${limit}`,
  );
  return response.data;
};

export const getQueryProducts = async (query: string) => {
  const response = await axios.get(`https://phone-catalog-f9j4.onrender.com/products/search/${query}`);
  return response.data;
};

// accessoryRouter.get('/', accessoryController.getAll);
// accessoryRouter.get('/:accessoryId', accessoryController.getById);
// accessoryRouter.get('/:accessoryId/recommended', accessoryController.getRecommended);

export const getAccessories = async () => {
  const response = await axios.get(
    `https://phone-catalog-f9j4.onrender.com/accessories/`,
  );
  return response.data;
};

export const getCategory = async (category: string) => {
  const response = await axios.get(
    `https://phone-catalog-f9j4.onrender.com/products/category/${category}`,
  );
  return response.data;
};

export const getAccessory = async (accessoryId: string) => {
  const response = await axios.get(
    `https://phone-catalog-f9j4.onrender.com/accessories/${accessoryId}`,
  );
  return response.data;
};

export const getRecommendedAccessories = async (accessoryId: string) => {
  const response = await axios.get(
    `https://phone-catalog-f9j4.onrender.com/accessories/${accessoryId}/recommended`,
  );
  return response.data;
};

// phoneRouter.get('/', phoneController.getAll);
// phoneRouter.get('/:phoneId', phoneController.getById);
// phoneRouter.get('/:phoneId/recommended', phoneController.getRecommended);

export const getPhones = async () => {
  const response = await axios.get(
    `https://phone-catalog-f9j4.onrender.com/phones/`,
  );
  return response.data;
};

export const getPhone = async (phoneId: string) => {
  const response = await axios.get(
    `https://phone-catalog-f9j4.onrender.com/phones/${phoneId}`,
  );
  return response.data;
};

export const getRecommendedPhones = async (phoneId: string) => {
  const response = await axios.get(
    `https://phone-catalog-f9j4.onrender.com/phones/${phoneId}/recommended`,
  );
  return response.data;
};

// tabletRouter.get('/', tabletController.getAll);
// tabletRouter.get('/:tabletId', tabletController.getById);
// tabletRouter.get('/:tabletId/recommended', tabletController.getRecommended);

export const getTablets = async () => {
  const response = await axios.get(
    `https://phone-catalog-f9j4.onrender.com/tablets/`,
  );
  return response.data;
};

export const getTablet = async (tabletId: string) => {
  const response = await axios.get(
    `https://phone-catalog-f9j4.onrender.com/tablets/${tabletId}`,
  );
  return response.data;
};

export const getRecommendedTablets = async (tabletId: string) => {
  const response = await axios.get(
    `https://phone-catalog-f9j4.onrender.com/tablets/${tabletId}/recommended`,
  );
  return response.data;
};

export const getOrders = async () => {
  const response = await axios.get(`https://phone-catalog-f9j4.onrender.com/orders/all`);
  return response.data;
};

const submitOrder = async (orderData : OrderDataType) => {
  try {
    const response = await axios.post('https://phone-catalog-f9j4.onrender.com/orders', orderData);
    console.log('Order created successfully:', response.data);
  } catch (error) {
    console.error('Error creating order:', error);

  }
};

//example data object
const orderData = {
  userName: 'JohnDoe',
  adress: '123 Main St',
  total: 100,
  orderList: ['Item1', 'Item2', 'Item3']
};

//function call for test purposes
submitOrder(orderData);