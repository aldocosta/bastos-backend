import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, Req, ValidationPipe } from '@nestjs/common';
import { UsersDTO } from './dto/users.dto';
import { UsersUpdateDTO } from './dto/users.update.dto';
import { UsersRepository } from './entity/users.repository';
import { UsersService } from './users.service';

@Controller('users/v1')
export class UsersController {
    constructor(private readonly svc: UsersService) { }

    @Post()
    async create(
        @Body(new ValidationPipe({ transform: true })) user: UsersDTO) {
        try {
            return await this.svc.create(user)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    @Put(':id')
    async update(
        @Param("id") id: string,
        @Body(new ValidationPipe({ transform: true })) user: UsersUpdateDTO) {
        try {
            user.id = id

            let object = user
            for (const key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    const element = object[key];
                    if (element == undefined) {
                        delete user[key]
                    }
                }
            }

            return await this.svc.update(user)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    @Get(":email/:password")
    async login(
        @Param("email") email: string,
        @Param("password") password: string
    ) {
        try {
            const u = new UsersDTO()
            u.email = email
            u.password = password
            const ret = await this.svc.login(u)
            if (!ret) {
                throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND)
            }

            delete ret.password

            return ret
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}
