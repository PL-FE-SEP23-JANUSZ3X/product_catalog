import Phone from '../model/phone.model';
import { Op, Sequelize } from 'sequelize';
import SortType from '../types/sortType';

const getAllPhones = async () => {
  return Phone.findAll();
};

const getPhoneById = async (phoneId: string) => {
  return Phone.findByPk(phoneId);
};

const getRecommendedById = async (phoneId: string) => {
  const phone = await getPhoneById(phoneId);

  const recommended = await Phone.findAll({
    where: {
      id: { [Op.ne]: phoneId },
      namespaceId: phone?.namespaceId,
      color: phone?.color,
    },
    limit: 5,
  });

  if (recommended.length < 5) {
    const recommendedByColor = await Phone.findAll({
      where: {
        id: { [Op.ne]: phoneId },
        namespaceId: phone?.namespaceId,
      },
      limit: 5 - recommended.length,
    });

    recommendedByColor.forEach((phone) => recommended.push(phone));
  }

  if (recommended.length < 5) {
    const recommendedRandom = await Phone.findAll({
      where: {
        id: { [Op.ne]: phoneId },
      },
      limit: 5 - recommended.length,
    });

    recommendedRandom.forEach((phone) => recommended.push(phone));
  }

  return recommended;
};

const phoneService = { getAllPhones, getPhoneById, getRecommendedById};

export default phoneService;
