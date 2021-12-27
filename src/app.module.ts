import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as path from 'path';
import * as Config from 'nestjs-config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './modules/users/entity/users.entity';
import { UsersModule } from './modules/users/users.module';
import { GastosModule } from './modules/gastos/gastos.module';

@Module({
  imports: [
    Config.ConfigModule.load(
      path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}'),
    ),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(),  
    UsersModule,
    GastosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
