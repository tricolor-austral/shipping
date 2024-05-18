import { Module } from '@nestjs/common';
import { ShipmentService } from './shipment.service';
import { PrismaService } from '../prisma.client';
import { ShipmentRepository } from './shipment.repository';

@Module({
  providers: [ShipmentService, PrismaService, ShipmentRepository],
  exports: [],
})
export class ShipmentModule {}
