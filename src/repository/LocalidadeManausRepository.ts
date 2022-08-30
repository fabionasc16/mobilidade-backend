/* eslint-disable import-helpers/order-imports */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-await */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/* eslint-disable radix */
import { Messages } from 'messages/Messages';
import { AppError } from 'AppError';
// eslint-disable-next-line prettier/prettier
import { LocalidadeManaus } from 'model/Localidade.model';
import moment from 'moment';
import mongoose from 'mongoose';
import { ILocalidadeManausRepository } from 'repository/ILocalidadeManausRepository';

class LocalidadeManausRepository implements ILocalidadeManausRepository {
  async create(localidadeCadastro: any): Promise<any> {
    const cadastroLocalidade = await LocalidadeManaus.create(
      localidadeCadastro,
    );

    return cadastroLocalidade;
  }

  async listById(id: string): Promise<any> {
    const data = await LocalidadeManaus.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
    return data;
  }

  async listAllLocalidadeManaus(params: any) {
    const page = params.currentPage != null ? `${params.currentPage}` : '1';
    const pageSize = params.perPage != null ? params.perPage : '10';
    const search = params.search != null ? params.search : '';
    let filters = {};

    // Caso a uma palavra para busca seja enviada
    if (search) {
      filters = {
        $and: [
          {
            $or: [
              { tipo_acidente: search },
              { address: search },
            ],
          },
          { excluido: false },
        ],
      };
    }

    const total = await LocalidadeManaus.countDocuments(filters);
    const pageNumber = parseInt(page, 10) - 1;
    const pageSizeNumber = await parseInt(pageSize);

    let data = await LocalidadeManaus.find(
      filters,
      ' tipo_acidente address  location ',
      { skip: pageNumber * pageSizeNumber, limit: pageSizeNumber, sort: { status: -1, nome: 1 } });

    let result = await { 'currentPage': page, 'perPage': pageSize, 'total': total, 'data': data };

    return result;
  }



  async delete(id: string): Promise<void> {
    return await LocalidadeManaus.findByIdAndUpdate(
      { _id: id },
      { excluido: true }
    );
  }

  async update(id: string, data: any): Promise<void> {
    data.updated_at = new Date();
    await LocalidadeManaus.findByIdAndUpdate(
      { _id: id },
      data
     ,
    );
  }
}

export { LocalidadeManausRepository };
