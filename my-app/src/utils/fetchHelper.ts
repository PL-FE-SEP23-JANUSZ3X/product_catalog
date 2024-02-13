import axios from 'axios';
import 'dotenv/config'

import { ErrorMessage } from '../types/ErrorMessages';
const BASE_URL = process.env.API;

export const getPhones = async () => {
  const response = await axios.get(`${BASE_URL}/phones`);
  return response.data;
};
