import Tablet from '../model/tablet.model'
import { Op } from 'sequelize';

const getAllTablets = async () => {
  return Tablet.findAll();
};

const getTabletById = async (tabletId: string) => {
  return Tablet.findByPk(tabletId);
};

const getRecommendedById = async (tabletId: string) => {
  // get tablet by id
  const tablet = await getTabletById(tabletId);

  // get recommended tablets (same model and color)
  const recommended = await Tablet.findAll({
    where: {
      id: { [Op.ne]: tabletId },
      namespaceId: tablet?.namespaceId,
      color: tablet?.color,
    },
    limit: 5,
  });

  // if less then 5 tablets found, search just by model
  if (recommended.length < 5) {
    const recommendedByColor = await Tablet.findAll({
      where: {
        id: { [Op.ne]: tabletId },
        namespaceId: tablet?.namespaceId,
      },
      limit: 5 - recommended.length,
    });

    recommendedByColor.forEach((tablet) => recommended.push(tablet));
  }

  // if still less then 5 tablets found, give any 5 tablets
  if (recommended.length < 5) {
    const recommendedRandom = await Tablet.findAll({
      where: {
        id: { [Op.ne]: tabletId },
      },
      limit: 5 - recommended.length,
    });

    recommendedRandom.forEach((tablet) => recommended.push(tablet));
  }

  return recommended;
};

const tabletService = { getAllTablets, getTabletById, getRecommendedById };

export default tabletService;
