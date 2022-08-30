/* eslint-disable prettier/prettier */
interface ILocalidadeManausRepository {
  create(data: any): Promise<any>;
  listById(id: string): Promise<any>;
  listAllLocalidadeManaus(params:any): any;
  delete(id: string): Promise<void>;
  update(id: string, data: any): Promise<void>;
}

export { ILocalidadeManausRepository }
