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

const tabletController = { getAll, getById, getRecommended };

export default tabletController;
