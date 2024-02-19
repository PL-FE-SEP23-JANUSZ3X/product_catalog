import phoneService from '../service/phone.service';
import SortType from '../types/sortType';
import { ControllerAction } from '../utils/types';

const getAll: ControllerAction = async (req, res) => {
  try {
    const allPhones = await phoneService.getAllPhones();

    if (!allPhones) {
      res.status(404).send('Not Found: The specified entity does not exist');

      return;
    }
    res.send(allPhones);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};

const getById: ControllerAction = async (req, res) => {
  try {
    const { phoneId } = req.params;
    const phone = await phoneService.getPhoneById(phoneId);

    if (!phone) {
      res.status(404).send('Not Found: The specified entity does not exist');
      return;
    }

    res.send(phone);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};

const getRecommended: ControllerAction = async (req, res) => {
  try {
    const { phoneId } = req.params;
    const recommended = await phoneService.getRecommendedById(phoneId);

    if (!recommended.length) {
      res.status(404).send('Not Found: The specified entity does not exist');
      return;
    }

    res.send(recommended);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};

const phoneController = { getAll, getById, getRecommended };

export default phoneController;
