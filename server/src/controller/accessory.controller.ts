import accessoryService from '../service/accessory.service';
import SortType from '../types/sortType';
import { ControllerAction } from '../utils/types';

const getAll: ControllerAction = async (req, res) => {
  try {
    const allAccessories = await accessoryService.getAllAccessories();

    if (!allAccessories) {
      res.status(404).send('Not Found: The specified entity does not exist');

      return;
    }
    res.send(allAccessories);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};

const getById: ControllerAction = async (req, res) => {
  try {
    const { accessoryId } = req.params;
    const accessory = await accessoryService.getAccessoryById(accessoryId);

    if (!accessory) {
      res.status(404).send('Not Found: The specified entity does not exist');
      return;
    }

    res.send(accessory);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};

const getRecommended: ControllerAction = async (req, res) => {
  try {
    const { accessoryId } = req.params;
    const recommended = await accessoryService.getRecommendedById(accessoryId);

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

const accessoryController = { getAll, getById, getRecommended };

export default accessoryController;
