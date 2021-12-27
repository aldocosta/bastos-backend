import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { GastosDTO } from './dto/gastos.dto';
import { GastosService } from './gastos.service';

@Controller('gastos/v1')
export class GastosController {

    constructor(private readonly svc: GastosService) { }

    @Post()
    async create(
        @Body() gastos: GastosDTO) {
        try {
            return await this.svc.create(gastos)
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}
