import { Injectable } from '@nestjs/common';
import { UsersLoginRepository } from 'src/auth/users.repository';
import { Users } from 'src/modules/users/entity/users.entity';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
    constructor(private repo: UsersLoginRepository) { }

    async findOne(email: string): Promise<Users | undefined> {
        return await this.repo.findOne({ email: email })        
    }
}
