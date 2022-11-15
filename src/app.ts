import 'reflect-metadata';
import { AppError } from './AppError';

import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { Messages } from './messages/Messages';
import morgan from 'morgan';
import { appRoutes } from './route';

//import 'singleton';

const app = express();
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'],
  }),
);
app.use(express.json());
app.use(morgan('combined'));
app.use('/api', appRoutes);
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.status).json({
        status: 'error',
        message: error.message,
      });
    }
    return response.status(500).json({
      status: 'error',
      message: `${Messages.INTERNAL_SERVER_ERROR} ${error}`,
    });
  },
);

export { app };
