import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersDTO } from './dto/users.dto';
import { UsersRepository } from './entity/users.repository';

@Injectable()
export class UsersService {
    constructor(private readonly repo: UsersRepository) { }

    async create(user: UsersDTO) {
        return await this.repo.save(user)
    }

    async update(user: UsersDTO) {
        let id = user.id
        delete user.id
        return await this.repo.update(id, user)
    }

    async login(user: UsersDTO) {
        return await this.repo.findOne({ email: user.email, password: user.password })
    }
}
