import { Sequelize } from 'sequelize-typescript';
import Phone from '../model/phone.model';
import Product from '../model/product.model';
import phoneData from '../apiData/phones.json';
import productData from '../apiData/products.json';

import 'dotenv/config';

const URI = process.env.EXTERNAL_URI || 'postgres';

const sequelize: Sequelize = new Sequelize(URI,{
    dialectOptions: {
      ssl:true,
    },
    models: [Phone, Product]
  });

async function addData() {
    Phone.bulkCreate(phoneData);
    Product.bulkCreate(productData);
}

async function connect(): Promise<void> {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

async function connection(): Promise<void> {
    try {
      await connect();
      await sequelize.sync({force: true});
      await addData()
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export { connection, sequelize };
