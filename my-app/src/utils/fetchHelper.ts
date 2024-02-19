import axios from 'axios';

// const BASE_URL = process.env.REACT_APP_API;

export const getPhones = async () => {
  const response = await axios.get(`https://phone-catalog-f9j4.onrender.com/phones/`);
  return response.data;
};

export const getPhone = async (phoneId: string) => {
  const response = await axios.get(`https://phone-catalog-f9j4.onrender.com/phones/${phoneId}`);
  return response.data;
};

export const getRecommended = async (phoneId: string) => {
  const response = await axios.get(`https://phone-catalog-f9j4.onrender.com/phones/${phoneId}/recommended`);
  return response.data;
};
