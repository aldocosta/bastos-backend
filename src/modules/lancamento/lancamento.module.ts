import { Module } from '@nestjs/common';
import { LancamentoService } from './lancamento.service';
import { LancamentoController } from './lancamento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lancamento } from './entity/lancamento.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Lancamento])],
  providers: [LancamentoService],
  controllers: [LancamentoController]
})
export class LancamentoModule {}
