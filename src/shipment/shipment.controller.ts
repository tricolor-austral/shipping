import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ShipmentService } from './shipment.service';
import { CreateShipmentDto } from './dto/create-shipment.dto';

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

  @Put(':id')
  async updateShipment(@Param('id') id: string, @Body() data: any) {
    return this.shipmentService.updateShipment(id, data);
  }

  @Delete(':id')
  async deleteShipment(@Param('id') id: string) {
    return this.shipmentService.deleteShipment(id);
  }
}
