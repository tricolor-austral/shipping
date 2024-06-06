import { ShipmentRepository } from "./shipment.repository";
import { Shipment, Status } from "@prisma/client";
import { CreateShipmentDto } from "./dto/create-shipment.dto";

export class ShipmentRepositoryMock extends ShipmentRepository {
  private shipments : Shipment [] = []
  private nextId : string ='1'

  create(ship: CreateShipmentDto): Promise<Shipment> {
    const newShipment: Shipment = { ...ship, id: this.nextId, status: 'NEW', createdAt: new Date(), dueDate: new Date() };
    this.shipments.push(newShipment);
    this.nextId = (BigInt(this.nextId) + BigInt(1)).toString();
    return Promise.resolve(newShipment);
  }

  findAll(): Promise<Shipment[]> {
    return Promise.resolve(this.shipments);
  }
  changeStatus(id: string, status: string): Promise<Shipment> {
    const shipment = this.shipments.find(shipment => shipment.id === id);
    if (shipment) {
      shipment.status = status as Status;
    }
    return Promise.resolve(shipment);
  }
}