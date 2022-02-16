import { Module } from '@nestjs/common';
import { LancamentoService } from './lancamento.service';
import { LancamentoController } from './lancamento.controller';
import { LancamentoRepository } from './entity/gastos.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([LancamentoRepository])],
  providers: [LancamentoService],
  controllers: [LancamentoController]
})
export class LancamentoModule {}
