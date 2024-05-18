import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.client';

@Injectable()
export class ShipmentRepository {
  constructor(private prisma: PrismaService) {}
}
