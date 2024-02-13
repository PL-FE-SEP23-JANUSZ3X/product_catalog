import axios from 'axios';
import { ErrorMessage } from '../types/ErrorMessages';
const BASE_URL = 'http://localhost:3000';

export const getPhones = async () => {
  const response = await axios.get(`${BASE_URL}/phones`);
  return response.data;
};
