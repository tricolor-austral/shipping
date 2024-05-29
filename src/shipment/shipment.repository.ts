import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.client';
import { Status } from '@prisma/client';
import { CreateShipmentDto } from "./dto/create-shipment.dto";

@Injectable()
export class ShipmentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateShipmentDto) {
    return this.prisma.shipment.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.shipment.findMany();
  }

  async findById(id: string) {
    return this.prisma.shipment.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.shipment.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.shipment.delete({
      where: { id },
    });
  }
  async changeStatus(id: string, status: Status) {
    return this.prisma.shipment.update({
      where: { id },
      data: { status },
    });
  }
}
