import { Body, Controller, DefaultValuePipe, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LancamentoDTO } from './dto/lancamento.dto';
import { LancamentoService } from './lancamento.service';

@Controller('lancamentos/v1')
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
    
    
    @Get('')
    //@UseGuards(JwtAuthGuard)
    async index(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
        @Query('gastoid') gastoid
    ): Promise<Pagination<LancamentoDTO>> {
        limit = limit > 100 ? 100 : limit;
        return this.svc.paginate({
            page,
            limit,
            route: '/lancamentos/v1?gastoid=' + gastoid,
        }, gastoid);
    }
}
