import express from 'express';
import tabletController from '../controller/tablet.controller';

const tabletRouter = express.Router();

tabletRouter.get('/', tabletController.getAll);
tabletRouter.get(
  '/pagination/:sortType-:start-:limit',
  tabletController.getSortedTablets,
);
tabletRouter.get('/:tabletId', tabletController.getById);
tabletRouter.get('/:tabletId/recommended', tabletController.getRecommended);

export default tabletRouter;
