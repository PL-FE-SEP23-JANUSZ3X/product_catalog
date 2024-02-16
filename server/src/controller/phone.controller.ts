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

    if (!recommended) {
      res.status(404).send('Not Found: The specified entity does not exist');
      return;
    }

    res.send(recommended);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};

const getSortedPhones: ControllerAction = async (req, res) => {
  try {
    const allPhones = await phoneService.getAllPhones();

    const { sortType, start, limit } = req.params;
    const { startIndex, limitIndex } = {
      startIndex: +start,
      limitIndex: +limit,
    };

    let sortedPhones = [];

    switch (sortType) {
      case SortType.ALPHABETIC:
        sortedPhones = allPhones.sort((a, b) => {
          if (a.name && b.name) {
            return a.name.localeCompare(b.name);
          }
          return 0;
        });
        break;
      case SortType.NEWEST:
        sortedPhones = allPhones.slice(0, limitIndex);
        break;
      case SortType.OLDEST:
        sortedPhones = allPhones.slice(startIndex);
        break;
      case SortType.ALPHABETIC_REVERSE:
        sortedPhones = allPhones.sort((a, b) => {
          if (a.name && b.name) {
            return b.name.localeCompare(a.name);
          }
          return 0;
        });
        break;
      case SortType.CHEAPEST:
        sortedPhones = allPhones.sort((a, b) => {
          const priceA = a.priceDiscount ?? a.priceRegular;
          const priceB = b.priceDiscount ?? b.priceRegular;
          if (priceA && priceB) {
            return priceA - priceB;
          }
          return 0;
        });
        break;
      case SortType.EXPENSIVE:
        sortedPhones = allPhones.sort((a, b) => {
          const priceA = a.priceDiscount ?? a.priceRegular;
          const priceB = b.priceDiscount ?? b.priceRegular;
          if (priceA && priceB) {
            return priceB - priceA;
          }
          return 0;
        });
        break;
      default:
        sortedPhones = allPhones;
        break;
    }

    res.json(sortedPhones.slice(startIndex, limitIndex));
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};
const phoneController = { getAll, getSortedPhones, getById, getRecommended };

export default phoneController;
