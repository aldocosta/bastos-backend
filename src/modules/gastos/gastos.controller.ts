import { Body, Controller, DefaultValuePipe, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GastosDTO } from './dto/gastos.dto';
import { GastosService } from './gastos.service';
import { Pagination } from 'nestjs-typeorm-paginate';

@Controller('gastos/v1')
export class GastosController {

    constructor(private readonly svc: GastosService) { }

    @Post()
    @UseGuards(JwtAuthGuard)
    async create(
        @Body() gastos: GastosDTO) {
        try {
            return await this.svc.create(gastos)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    @Get(':userid')
    @UseGuards(JwtAuthGuard)
    async findGastosByUserId(
        @Param('userid') userid: string) {
        try {
            return await this.svc.find(userid)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    @Get('')
    async index(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
        @Query('userid') userid
    ): Promise<Pagination<GastosDTO>> {
        limit = limit > 100 ? 100 : limit;
        return this.svc.paginate({
            page,
            limit,
            route: '/gastos/v1?userid=' + userid,
        }, userid);
    }


}
