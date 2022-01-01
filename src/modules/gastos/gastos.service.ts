import { Injectable } from '@nestjs/common';
import { GastosDTO } from './dto/gastos.dto';
import { GastosRepository } from './entity/gastos.repository';
import {
    paginate,
    Pagination,
    IPaginationOptions,
} from 'nestjs-typeorm-paginate';


@Injectable()
export class GastosService {
    constructor(private readonly repo: GastosRepository) { }

    async create(gasto: GastosDTO) {
        return await this.repo.save(gasto)
    }

    async update(gasto: GastosDTO) {
        return await this.repo.update(gasto.id, gasto)
    }

    async find(userid: string) {
        return await this.repo.
            find({ where: { user: userid } })
    }

    async paginate(options: IPaginationOptions, userid: string): Promise<Pagination<GastosDTO>> {
        const queryBuilder = this.repo.createQueryBuilder('g');
        queryBuilder.where({ user: userid })
        //queryBuilder.orderBy('g.name', 'DESC'); // Or whatever you need to do

        return paginate<GastosDTO>(queryBuilder, options);
    }
}
