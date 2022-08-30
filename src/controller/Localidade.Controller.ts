/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
import { Request, Response } from 'express';
import { LocalidadeService } from 'service/Localidade.Service';



class LocalidadeController {   
  static service: LocalidadeService;
  public constructor() {

        LocalidadeController.service = new LocalidadeService();
    }

    async listAllLocalidade(request: Request, response: Response): Promise<any> {
        let data = await LocalidadeController.service.listAllLocalidade(request.query);
        return response.status(200).json(data);
    }

    async createLocalidade(request: Request, response: Response): Promise<any> {
        let data = await LocalidadeController.service.create(request.body);
        return response.status(200).json(data);
    }

    async listLocalidadeById(request: Request, response: Response): Promise<any> {
        let data = await LocalidadeController.service.listLocalidadeById(request.params.id);
        return response.status(200).json(data);
    }

    async deleteLocalidade(request: Request, response: Response): Promise<any> {
        let data = await LocalidadeController.service.deleteLocalidade(request.params.id);
        return response.status(200).json(data);
    }
    async updateLocalidade(request: Request, response: Response): Promise<any> {
        let data = await LocalidadeController.service.update(request.params.id, request.body);
        return response.status(200).json(data);
    }
}

export { LocalidadeController };
