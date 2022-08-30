import 'reflect-metadata';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({
  path: './.env.dev',
});

let database: mongoose.Connection;

export default async () => {
  const url = process.env.MONGO_URL;
  mongoose.connect(
    url,
    {
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASS,
      dbName: process.env.MONGO_DBNAME,
    },
    error => {
      if (error) {
        console.log(`Erro ao conectar: ${error}`);
      }
    },
  );

  database = mongoose.connection;
};
