/* eslint-disable import-helpers/order-imports */
import { Router } from 'express';
import { localidadeRoutes } from './Localidade.routes';

const appRoutes = Router();

appRoutes.get('/', (request, response) => {
  response.set('Content-Type', 'text/plain');
  response.format({
    'text/plain': () => response.send('API - Projeto Mobilidade v1 '),
    'text/html': () =>
      response.send('<h1>API - Projeto MObilidade v1 </h1>'),
    'application/json': () =>
      response.send({ message: 'Aloha application/json' }),
    default: () => response.status(406).send('Not acceptable'),
  });
});

appRoutes.use('/localidade', localidadeRoutes);

export { appRoutes };
