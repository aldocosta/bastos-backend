import { Module } from '@nestjs/common';
import { GastosService } from './gastos.service';
import { GastosController } from './gastos.controller';
import { GastosRepository } from './entity/gastos.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([GastosRepository])],
  providers: [GastosService],
  controllers: [GastosController]
})
export class GastosModule {}
