import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaDTO } from './dto/categoria.dto';
import { Categoria } from './entity/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private readonly repo: Repository<Categoria> ) { }    

    async create(dto: CategoriaDTO) {
        return this.repo.save(dto)
    }

    async update(id: number, dto: CategoriaDTO) {
        return this.repo.update(id, dto)
    }

    async delete(id: number) {
        return this.repo.delete(id)
    }

    async findById(id: number) {
        return this.repo.findOne(id)
    }

    async findAllOrQuery(query) {
        return this.repo.find(query)
    }
}
