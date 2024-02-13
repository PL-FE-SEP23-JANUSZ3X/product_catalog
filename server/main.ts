import express, { Express } from 'express';
import { connection } from './src/utils/db';
import errorHandler from './src/utils/errorHandler';
import phoneRouter from './src/router/phone.router';
import productRouter from './src/router/products.router';
import cors from 'cors';

import 'dotenv/config';

const app: Express = express();

const PORT = process.env.PORT || 4000;
connection();

app.use(errorHandler);
app.use(express.json());
app.use(cors());

app.use('/phones', phoneRouter);
app.use('/products', productRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on localhost:3000');
});
