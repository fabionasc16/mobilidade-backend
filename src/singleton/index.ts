import { ILocalidadeManausRepository } from '../repository/ILocalidadeManausRepository';
import { LocalidadeManausRepository } from '../repository/LocalidadeManausRepository';
import { container } from 'tsyringe';

// * --------------------- Cadastro de Acidente ---------------------

container.registerSingleton<ILocalidadeManausRepository>(
  'LocalidadeMnauasRepository',
  LocalidadeManausRepository,
);
