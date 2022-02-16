import { Gastos } from 'src/modules/gastos/entity/gastos.entity';

export class LancamentoDTO {

  public id: string;

  public nm_lancamento_gasto: string;

  public data_pagto: Date;

  public valor: number;

  public gasto: Gastos
}
