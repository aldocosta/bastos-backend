import { Users } from '../../users/entity/users.entity';
import { Entity, Column, OneToMany, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Lancamento } from 'src/modules/lancamento/entity/lancamento.entity';


@Entity('Gastos')
export class Gastos {

  @PrimaryGeneratedColumn({ name: 'id' })
  public id: string;

  @Column({ name: 'nm_gasto' })
  public nm_gasto: string;

  @Column({ name: 'mes' })
  public mes: string;

  @Column({ name: 'ano' })
  public ano: number;

  @ManyToOne(() => Users, user => user.gastos)
  user: Users

  @OneToMany(()=> Lancamento, lancamentos => lancamentos.gasto)
  lancamentos: Lancamento[]
}
