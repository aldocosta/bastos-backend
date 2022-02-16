import { Gastos } from 'src/modules/gastos/entity/gastos.entity';
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('Users')
export class Users {

  @PrimaryGeneratedColumn({ name: 'id' })
  public id: string;

  @Column({ name: 'email' })
  public email: string;

  @Column({ name: 'name' })
  public name: string;

  @Column({ name: 'password' })//ok
  public password: string;

  @OneToMany(()=> Gastos, gastos => gastos.user)
  gastos: Gastos[]
}
