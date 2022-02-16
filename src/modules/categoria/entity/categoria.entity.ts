//import { Users } from '../../users/entity/users.entity';
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';


@Entity('Categoria')
export class Categoria {

  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'nm_categoria' })
  public nm_categoria: string;

}
