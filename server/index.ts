import express from 'express';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req: any, res: any) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {});