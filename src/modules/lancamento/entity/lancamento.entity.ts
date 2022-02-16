import { Gastos } from 'src/modules/gastos/entity/gastos.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('Lancamento')
export class Lancamento {

  @PrimaryGeneratedColumn({ name: 'id' })
  public id: string;

  @Column({ name: 'nm_lancamento_gasto' })
  public nm_lancamento_gasto: string;

  @Column({ name: 'data_pagto' })
  public data_pagto: Date;

  @Column({ name: 'valor' })
  public valor: number;

  @ManyToOne(() => Gastos, gastos => gastos.lancamentos)
  public gasto: Gastos
}
