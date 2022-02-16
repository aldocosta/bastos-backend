import { Repository, EntityRepository } from 'typeorm';
import { Lancamento } from './lancamento.entity';

@EntityRepository(Lancamento)
export class LancamentoRepository extends Repository<Lancamento> {}
