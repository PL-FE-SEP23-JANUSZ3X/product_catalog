import axios from 'axios';
// import 'dotenv/config';

// const BASE_URL = process.env.API;
const BASE_URL = 'http://localhost:4000';

export const getPhones = async () => {
  const response = await axios.get(`${BASE_URL}/phones`);
  return response.data;
};

export const getPhone = async (phoneId: string) => {
  const response = await axios.get(`${BASE_URL}/phones/${phoneId}`);
  return response.data;
};
