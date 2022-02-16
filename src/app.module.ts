import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as path from 'path';
import * as Config from 'nestjs-config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/users/users.module';
import { GastosModule } from './modules/gastos/gastos.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { Categoria } from './modules/categoria/entity/categoria.entity';
import { Gastos } from './modules/gastos/entity/gastos.entity';
import { Users } from './modules/users/entity/users.entity';
import { LancamentoModule } from './modules/lancamento/lancamento.module';

@Module({
  imports: [
    Config.ConfigModule.load(
      path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}'),
    ),
    ConfigModule.forRoot(
      {
        isGlobal: true,
      }),
    TypeOrmModule.forRoot(
      // {
      //   type: 'mssql',
      //   host: 'localhost',
      //   port: 1433,
      //   username: 'sa',
      //   password: '@3c1sposql',
      //   database: 'dbaldo',
      //   entities: ['dist/**/*.entity.js'],
      //   synchronize: false,
      //   migrations: ['dist/migrations/*.js'],
      //   cli: {
      //     migrationsDir: 'src/migrations'
      //   },
      //   options: {
      //     encrypt: false,
      //   },
      //   extra: {
      //     trustServerCertificate: true,
      //     options: {
      //       enableArithAbort: false,
      //     },
      //   },
      // }
    ),
    UserModule,
    GastosModule,
    AuthModule,
    UsersModule,
    CategoriaModule,
    LancamentoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
