import { Module } from '@nestjs/common';
import { ShipmentService } from './shipment.service';
import { ShipmentController } from './shipment.controller';
import { ShipmentRepository } from './shipment.repository';
import { PrismaService } from '../prisma.client';

@Module({
  providers: [ShipmentService, ShipmentRepository, PrismaService],
  controllers: [ShipmentController],
  exports: [ShipmentRepository],
})
export class ShipmentModule {}
