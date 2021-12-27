import { Repository, EntityRepository } from 'typeorm';
import { Gastos } from './gastos.entity';

@EntityRepository(Gastos)
export class GastosRepository extends Repository<Gastos> {}
