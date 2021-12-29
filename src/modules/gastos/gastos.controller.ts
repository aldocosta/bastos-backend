import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GastosDTO } from './dto/gastos.dto';
import { GastosService } from './gastos.service';

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
        @Param('userid') userid:string) {
        try {
            return await this.svc.find(userid)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}
