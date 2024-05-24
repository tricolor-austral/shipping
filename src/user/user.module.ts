import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { PrismaService } from '../prisma.client';

@Module({
  controllers: [UserController],
  providers: [UserRepository, PrismaService],
})
export class UserModule {}
