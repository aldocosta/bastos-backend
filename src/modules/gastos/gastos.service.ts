import { Injectable } from '@nestjs/common';
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
}
