import axios from 'axios';
import { ErrorMessage } from '../types/ErrorMessages';
const BASE_URL = 'http://localhost:3000';

export const getPhones = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/phones`);
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error(ErrorMessage.LOAD);
  }
};
