import { Injectable } from '@nestjs/common';
import { ShipmentRepository } from './shipment.repository';

@Injectable()
export class ShipmentService {
  constructor(private readonly shipmentRepository: ShipmentRepository) {}

  async createShipment(data: any) {
    return this.shipmentRepository.create(data);
  }

  async getShipments() {
    return this.shipmentRepository.findAll();
  }

  async getShipmentById(id: string) {
    return this.shipmentRepository.findById(id);
  }

  async updateShipment(id: string, data: any) {
    return this.shipmentRepository.update(id, data);
  }

  async deleteShipment(id: string) {
    return this.shipmentRepository.delete(id);
  }
}
