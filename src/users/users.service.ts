import { Injectable } from '@nestjs/common';
import { UsersLoginRepository } from 'src/auth/users.repository';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
    constructor(private repo: UsersLoginRepository) { }
    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
        },
    ];

    async findOne(email: string): Promise<User | undefined> {
        return await this.repo.findOne({ email: email })
        //return this.users.find(user => user.username === username);
    }
}
