import tabletService from '../service/tablet.service';
import SortType from '../types/sortType';
import { ControllerAction } from '../utils/types';

const getAll: ControllerAction = async (req, res) => {
  try {
    const allTablets = await tabletService.getAllTablets();

    if (!allTablets) {
      res.status(404).send('Not Found: The specified entity does not exist');

      return;
    }
    res.send(allTablets);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};

const getById: ControllerAction = async (req, res) => {
  try {
    const { tabletId } = req.params;
    const tablet = await tabletService.getTabletById(tabletId);

    if (!tablet) {
      res.status(404).send('Not Found: The specified entity does not exist');
      return;
    }

    res.send(tablet);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};

const getRecommended: ControllerAction = async (req, res) => {
  try {
    const { tabletId } = req.params;
    const recommended = await tabletService.getRecommendedById(tabletId);

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

const getSortedTablets: ControllerAction = async (req, res) => {
  try {
    const allTablets = await tabletService.getAllTablets();

    const { sortType, start, limit } = req.params;
    const { startIndex, limitIndex } = {
      startIndex: +start,
      limitIndex: +limit,
    };

    let sortedTablets = [];

    switch (sortType) {
      case SortType.ALPHABETIC:
        sortedTablets = allTablets.sort((a, b) => {
          if (a.name && b.name) {
            return a.name.localeCompare(b.name);
          }
          return 0;
        });
        break;
      case SortType.NEWEST:
        sortedTablets = allTablets.slice(0, limitIndex);
        break;
      case SortType.OLDEST:
        sortedTablets = allTablets.slice(startIndex);
        break;
      case SortType.ALPHABETIC_REVERSE:
        sortedTablets = allTablets.sort((a, b) => {
          if (a.name && b.name) {
            return b.name.localeCompare(a.name);
          }
          return 0;
        });
        break;
      case SortType.CHEAPEST:
        sortedTablets = allTablets.sort((a, b) => {
          const priceA = a.priceDiscount ?? a.priceRegular;
          const priceB = b.priceDiscount ?? b.priceRegular;
          if (priceA && priceB) {
            return priceA - priceB;
          }
          return 0;
        });
        break;
      case SortType.EXPENSIVE:
        sortedTablets = allTablets.sort((a, b) => {
          const priceA = a.priceDiscount ?? a.priceRegular;
          const priceB = b.priceDiscount ?? b.priceRegular;
          if (priceA && priceB) {
            return priceB - priceA;
          }
          return 0;
        });
        break;
      case SortType.HOTPRICES:
        sortedTablets = allTablets.sort((a, b) => {
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
        sortedTablets = allTablets;
        break;
    }

    res.json(sortedTablets.slice(startIndex, limitIndex));
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};
const tabletController = { getAll, getSortedTablets, getById, getRecommended };

export default tabletController;
