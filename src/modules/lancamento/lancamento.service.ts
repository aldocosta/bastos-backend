import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lancamento } from './entity/lancamento.entity';
import { Repository } from 'typeorm';
import { LancamentoDTO } from './dto/lancamento.dto';

@Injectable()
export class LancamentoService {
    constructor(
        @InjectRepository(Lancamento)
        private readonly repo: Repository<Lancamento>) { }

    async create(dto: LancamentoDTO) {
        return await this.repo.save(dto)
    }

    async update(id: number, dto: LancamentoDTO) {
        return await this.repo.update(id, dto)
    }

    async delete(id: number) {
        return this.repo.delete(id)
    }

    async getById(id: number) {
        return this.repo.find({ id: id })
    }

    async getByGastoId(id: number) {
        return this.repo.find({
            where: {
                gasto: { id: id }
            }
        })

    }
}
