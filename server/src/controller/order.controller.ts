import { ControllerAction } from '../utils/types';
import orderService from '../service/order.service';


const getAll: ControllerAction = async (req, res) => {
    try {
      const allOrders = await orderService.getAllOrders();
  
      if (!allOrders) {
        res.status(404).send('Not Found: The specified entity does not exist');
  
        return;
      }
      res.send(allOrders);
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    }
  };

const createOrder: ControllerAction = async(req, res) => {
    const { userName, adress, total, orderList } = req.body;
    try {
      const items = await orderService.createOrder(userName, adress, total, orderList);
  
      if (!items) {
        res.status(404).send('Not Found: The specified entity does not exist');
  
        return;
      }
  
      res.status(201).json(items);
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    }
  };

const orderController = {createOrder, getAll};
export default orderController;