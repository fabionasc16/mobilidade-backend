/* eslint-disable import/first */
/* eslint-disable no-return-await */
/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-extraneous-dependencies
import { LocalidadeManausRepository } from "../repository/LocalidadeManausRepository";


export class LocalidadeService {
    update(id: string, body: any) {
      throw new Error('Method not implemented.');
    }
 
    private localidadeManausRepository: LocalidadeManausRepository;

    constructor() {
        this.localidadeManausRepository = new LocalidadeManausRepository();
    }

    async updatelocalidade( id:string, query: any) {
       return this.localidadeManausRepository.update(id, query);
    }
    async deleteLocalidade(query: any) {
        return this.localidadeManausRepository.delete(query);
    }
    async listLocalidadeById(id: string) {
        return this.localidadeManausRepository.listById(id);
    }
    async create(data: any) {            
        return await this.localidadeManausRepository.create(data);
    }

    async listAllLocalidade(params: any) {
        return await this.localidadeManausRepository.listAllLocalidadeManaus(params);
    }
}
