import Order from '../model/order.model';

const getAllOrders = async () => {
    return Order.findAll();
  };

const createOrder = (userName: string, adress: string, total: number, orderList: string[]) => {
    const order = {
      userName,
      adress,
      total,
      orderList
    };
  
    return Order.create(order);
  };

const orderService = { createOrder, getAllOrders };

export default orderService;