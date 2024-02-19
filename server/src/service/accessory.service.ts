import Accessory from '../model/accessory.model';
import { Op } from 'sequelize';

const getAllAccessories = async () => {
  return Accessory.findAll();
};

const getAccessoryById = async (accessoryId: string) => {
  return Accessory.findByPk(accessoryId);
};

const getRecommendedById = async (accessoryId: string) => {
  // get accessory by id
  const accessory = await getAccessoryById(accessoryId);

  // get recommended accessorys (same model and color)
  const recommended = await Accessory.findAll({
    where: {
      id: { [Op.ne]: accessoryId },
      namespaceId: accessory?.namespaceId,
      color: accessory?.color,
    },
    limit: 5,
  });

  // if less then 5 accessorys found, search just by model
  if (recommended.length < 5) {
    const recommendedByColor = await Accessory.findAll({
      where: {
        id: { [Op.ne]: accessoryId },
        namespaceId: accessory?.namespaceId,
      },
      limit: 5 - recommended.length,
    });

    recommendedByColor.forEach((accessory) => recommended.push(accessory));
  }

  // if still less then 5 accessorys found, give any 5 accessorys
  if (recommended.length < 5) {
    const recommendedRandom = await Accessory.findAll({
      where: {
        id: { [Op.ne]: accessoryId },
      },
      limit: 5 - recommended.length,
    });

    recommendedRandom.forEach((accessory) => recommended.push(accessory));
  }

  return recommended;
};

const accessoryService = { getAllAccessories, getAccessoryById, getRecommendedById };

export default accessoryService;
