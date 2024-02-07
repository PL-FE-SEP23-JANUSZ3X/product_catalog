import { Sequelize } from 'sequelize-typescript';
import Phone from '../model/phone.model';
// import Product from '../model/product.model';
import phoneData  from '../apiData/phones.json';

import 'dotenv/config';

const URI = process.env.INTERNAL_URI || 'postgres';

const sequelize: Sequelize = new Sequelize(URI,{
    dialectOptions: {
      ssl:true,
    },
    models: [Phone]
  });

async function addPhones() {
    return Phone.bulkCreate(phoneData);
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
      await sequelize.sync();
      await addPhones()
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export { connection, sequelize };
