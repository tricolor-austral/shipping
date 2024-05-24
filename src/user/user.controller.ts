import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { compare, hash } from 'bcrypt';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';

@Controller('users')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    const hashedPassword = await hash(body.password, 10);
    return this.userRepository.create(body.email, hashedPassword);
  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.userRepository.findOne(body.username);
    if (user && (await compare(body.password, user.password))) {
      const token = randomStringGenerator();
      return { message: 'Login successful', token };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
