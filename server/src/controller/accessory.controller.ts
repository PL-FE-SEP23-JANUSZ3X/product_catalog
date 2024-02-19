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

const getSortedAccessories: ControllerAction = async (req, res) => {
  try {
    const allaccessorys = await accessoryService.getAllAccessories();

    const { sortType, start, limit } = req.params;
    const { startIndex, limitIndex } = {
      startIndex: +start,
      limitIndex: +limit,
    };

    let sortedAccessories = [];

    switch (sortType) {
      case SortType.ALPHABETIC:
        sortedAccessories= allaccessorys.sort((a, b) => {
          if (a.name && b.name) {
            return a.name.localeCompare(b.name);
          }
          return 0;
        });
        break;
      case SortType.NEWEST:
        sortedAccessories = allaccessorys.slice(0, limitIndex);
        break;
      case SortType.OLDEST:
        sortedAccessories = allaccessorys.slice(startIndex);
        break;
      case SortType.ALPHABETIC_REVERSE:
        sortedAccessories = allaccessorys.sort((a, b) => {
          if (a.name && b.name) {
            return b.name.localeCompare(a.name);
          }
          return 0;
        });
        break;
      case SortType.CHEAPEST:
        sortedAccessories = allaccessorys.sort((a, b) => {
          const priceA = a.priceDiscount ?? a.priceRegular;
          const priceB = b.priceDiscount ?? b.priceRegular;
          if (priceA && priceB) {
            return priceA - priceB;
          }
          return 0;
        });
        break;
      case SortType.EXPENSIVE:
        sortedAccessories = allaccessorys.sort((a, b) => {
          const priceA = a.priceDiscount ?? a.priceRegular;
          const priceB = b.priceDiscount ?? b.priceRegular;
          if (priceA && priceB) {
            return priceB - priceA;
          }
          return 0;
        });
        break;
      case SortType.HOTPRICES:
        sortedAccessories = allaccessorys.sort((a, b) => {
          let discountA = 0;
          let discountB = 0;
          if (a.priceDiscount && a.priceRegular) {
            discountA = +a.priceRegular - +a.priceDiscount;
          }
          if (b.priceDiscount && b.priceRegular) {
            discountB = +b.priceRegular - +b.priceDiscount;
          }
          return discountB - discountA;
        });
        break;
      default:
        sortedAccessories = allaccessorys;
        break;
    }

    res.json(sortedAccessories.slice(startIndex, limitIndex));
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};
const accessoryController = { getAll, getSortedAccessories, getById, getRecommended };

export default accessoryController;
