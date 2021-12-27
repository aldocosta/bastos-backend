import { Users } from '../../users/entity/users.entity';
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


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
}
