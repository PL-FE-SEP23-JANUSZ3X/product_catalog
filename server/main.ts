import express, { Express } from 'express';
import { connection } from './src/utils/db';
import errorHandler from './src/utils/errorHandler';
import phoneRouter from './src/router/phone.router';
import productRouter from './src/router/products.router';
import accessoryRouter from './src/router/accessory.router';
import tabletRouter from './src/router/tablet.router';
import orderRouter from './src/router/order.router';
import cors from 'cors';

import 'dotenv/config';

const app: Express = express();

const PORT = process.env.PORT || 4000;
connection();

app.use(errorHandler);
app.use(express.json());
app.use(cors());

app.use('/tablets', tabletRouter);
app.use('/accessories', accessoryRouter);
app.use('/phones', phoneRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on localhost:${PORT}`);
});
