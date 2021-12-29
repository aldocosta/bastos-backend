import { Repository, EntityRepository } from 'typeorm';
import { Users } from './users.entity';


@EntityRepository(Users)
export class UsersLoginRepository extends Repository<Users> {}
