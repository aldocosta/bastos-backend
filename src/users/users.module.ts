import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersLoginRepository } from 'src/auth/users.repository';
import { UsersService } from '../users/users.service';

@Module({
  imports:[TypeOrmModule.forFeature([UsersLoginRepository])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
