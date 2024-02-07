import express, { Express } from 'express';
import { connection } from './src/utils/db';
import errorHandler from './src/utils/errorHandler';
import phoneRouter from './src/router/phone.router';

const app: Express = express();


connection();

app.use(errorHandler);
app.use(express.json());

app.use('/phones', phoneRouter);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on localhost:3000');
});
