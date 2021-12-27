import { Injectable } from '@nestjs/common';
import { Users } from '../users/entity/users.entity';
import { GastosDTO } from './dto/gastos.dto';
import { GastosRepository } from './entity/gastos.repository';

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
}
