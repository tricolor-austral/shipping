import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { ShipmentService } from './shipment.service';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { Status } from '@prisma/client';

@Controller('shipments')
export class ShipmentController {
  constructor(private readonly shipmentService: ShipmentService) {}

  @Post()
  async createShipment(@Body() data: CreateShipmentDto) {
    return this.shipmentService.createShipment(data);
  }

  @Get()
  async getShipments() {
    return this.shipmentService.getShipments();
  }

  @Get(':id')
  async getShipmentById(@Param('id') id: string) {
    return this.shipmentService.getShipmentById(id);
  }

  @Delete(':id')
  async deleteShipment(@Param('id') id: string) {
    return this.shipmentService.deleteShipment(id);
  }

  @Post(':id/change-status')
  async changeStatus(@Param('id') id: string, @Body('status') status: Status) {
    console.log('id', id);
    return this.shipmentService.changeStatus(id, status);
  }
}
