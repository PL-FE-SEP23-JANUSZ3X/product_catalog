import express from 'express';
import accessoryController from '../controller/accessory.controller';

const accessoryRouter = express.Router();

accessoryRouter.get('/', accessoryController.getAll);
accessoryRouter.get(
  '/pagination/:sortType-:start-:limit',
  accessoryController.getSortedAccessories,
);
accessoryRouter.get('/:accessoryId', accessoryController.getById);
accessoryRouter.get('/:accessoryId/recommended', accessoryController.getRecommended);

export default accessoryRouter;
