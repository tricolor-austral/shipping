import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.client';
import { UserDto } from './dto/user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findOne(email: string): Promise<UserDto | undefined> {
    const user: User | null = await this.prisma.user.findFirst({
      where: { email },
    });
    if (user) {
      return {
        email: user.email,
        password: user.password,
      };
    } else {
      return undefined;
    }
  }

  async create(email: string, password: string): Promise<UserDto> {
    return this.prisma.user.create({
      data: { email, password },
    });
  }
}
