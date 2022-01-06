import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
        const id = gasto.id
        delete gasto.id
        return await this.repo.update(id, gasto)
    }

    async delete(id: string) {
        return await this.repo.delete(id)
    }

    async findByUserId(userid: string) {
        return await this.repo.
            find({ where: { user: userid } })
    }

    async findByUserIdCardId(userid: string, id: string) {
        return await this.repo.
            find({ where: { user: userid, id: id } })
    }

    async paginate(options: IPaginationOptions, userid: string): Promise<Pagination<GastosDTO>> {
        const queryBuilder = this.repo.createQueryBuilder('g');
        queryBuilder.where({ user: userid })
        //queryBuilder.orderBy('g.name', 'DESC'); // Or whatever you need to do

        return paginate<GastosDTO>(queryBuilder, options);
    }
}
