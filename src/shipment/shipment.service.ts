import { Injectable } from '@nestjs/common';
import { ShipmentRepository } from './shipment.repository';
import { Status } from '@prisma/client';
import { CreateShipmentDto } from "./dto/create-shipment.dto";

@Injectable()
export class ShipmentService {
  constructor(private readonly shipmentRepository: ShipmentRepository) {}

  async createShipment(data: CreateShipmentDto) {
    return this.shipmentRepository.create(data);
  }

  async getShipments() {
    return this.shipmentRepository.findAll();
  }

  async getShipmentById(id: string) {
    return this.shipmentRepository.findById(id);
  }

  async deleteShipment(id: string) {
    return this.shipmentRepository.delete(id);
  }
  async changeStatus(id: string, status: Status) {
    const shipments = await this.shipmentRepository.changeStatus(id, status);
    const value = {
      id: shipments.orderID,
      status: shipments.status,
    };
    try {
      //Poner ngrok correcto
      await fetch('https://fc43-181-169-17-49.ngrok-free.app/order', {
        method: 'PUT',
        body: JSON.stringify(value),
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (e) {
      console.log('missing ngrok url');
    }
  }
}
