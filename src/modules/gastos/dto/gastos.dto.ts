import { Users } from '../../users/entity/users.entity';

export class GastosDTO {

  public id: string;

  public nm_gasto: string;

  public mes: string;

  public ano: number;

  user: Users
}
