import Phone from '../model/phone.model';
import { Op } from 'sequelize';

const getAllPhones = async () => {
  return Phone.findAll();
};

const getPhoneById = async (phoneId: string) => {
  return Phone.findByPk(phoneId);
};

const getRecommendedById = async (phoneId: string) => {
  // get phone by id
  const phone = await getPhoneById(phoneId);

  // get recommended phones (same model and color)
  const recommended = await Phone.findAll({
    where: {
      id: { [Op.ne]: phoneId },
      namespaceId: phone?.namespaceId,
      color: phone?.color,
    },
    limit: 5,
  });

  // if less then 5 phones found, search just by model
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

  // if still less then 5 phones found, give any 5 phones
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

const phoneService = { getAllPhones, getPhoneById, getRecommendedById };

export default phoneService;
