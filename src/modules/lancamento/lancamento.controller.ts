import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { LancamentoDTO } from './dto/lancamento.dto';
import { LancamentoService } from './lancamento.service';

@Controller('lancamento/v1')
export class LancamentoController {

    constructor(private readonly svc: LancamentoService) { }

    @Post()
    async create(@Body() dto: LancamentoDTO) {
        try {
            return await this.svc.create(dto)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    @Put(":id")
    async update(
        @Param('id') id: number,
        @Body() dto: LancamentoDTO) {
        try {
            return await this.svc.update(id, dto)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    @Delete(":id")
    async delete(@Param('id') id: number) {
        try {
            return await this.svc.delete(id)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    @Get(":id")
    async getById(@Param('id') id: number) {
        try {
            return await this.svc.getByGastoId(id)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }    
}
