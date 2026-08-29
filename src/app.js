import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import apiRouter from './routes/index.js';



dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', apiRouter);


export default app;



