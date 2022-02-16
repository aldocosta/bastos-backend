import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { CategoriaDTO } from '../categoria/dto/categoria.dto';
import { CategoriaService } from './categoria.service';

@Controller('categoria/v1')
export class CategoriaController {

    constructor(private svc: CategoriaService) { }

    @Post()
    async create(
        @Body(new ValidationPipe({ transform: true })) dto: CategoriaDTO) {
        try {
            return this.svc.create(dto)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    @Put(":id")
    async update(
        @Param('id') id: number,
        @Body(new ValidationPipe({ transform: true })) dto: CategoriaDTO) {
        try {
            return this.svc.update(id, dto)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    @Delete(":id")
    async delete(@Param('id') id: number) {
        try {
            return this.svc.delete(id)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    @Get(":id")
    async findById(@Param('id') id: number) {
        try {
            return this.svc.findById(id)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    @Get()
    async findAllCategory() {
        return this.svc.findAllOrQuery({})
    }

}
