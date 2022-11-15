import { LocalidadeController } from '../controller/Localidade.Controller';
import { Router } from 'express';

const localidadeRoutes = Router();

const localidadeController = new LocalidadeController();

localidadeRoutes.post('/', localidadeController.createLocalidade);

localidadeRoutes.get('/', localidadeController.listAllLocalidade);

localidadeRoutes.get('/detalhes/:id', localidadeController.listLocalidadeById);

localidadeRoutes.delete('/:id', localidadeController.deleteLocalidade);

localidadeRoutes.put('/:id', localidadeController.updateLocalidade);

localidadeRoutes.post('/:id', localidadeController.updateLocalidade);

export { localidadeRoutes };
