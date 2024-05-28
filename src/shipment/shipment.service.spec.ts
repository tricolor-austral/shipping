import { Test, TestingModule } from '@nestjs/testing';
import { ShipmentService } from './shipment.service';
import { PrismaService } from '../prisma.client';
import { ShipmentRepositoryMock } from './shipment.repositoryMock';
import { ShipmentRepository } from './shipment.repository';

describe('ShipmentService', () => {
  let service: ShipmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        ShipmentService,
        {
          provide: ShipmentRepository,
          useClass: ShipmentRepositoryMock,
        },
    ]}
    ).compile();

    service = module.get<ShipmentService>(ShipmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  //Test create shipement empty
  it('should create a shipment', async () => {
    const shipment = await service.createShipment({});
    expect(shipment).toEqual({ id: '1', status: 'DISPATCHED', createdAt: expect.any(Date), dueDate: expect.any(Date) });
  })

  //Test shipment with one order
  it('should create a shipment with one order', async () => {
    const shipment = await service.createShipment({ orderId: '1' });
    expect(shipment).toEqual({ id: '1', orderId: '1', status: 'DISPATCHED', createdAt: expect.any(Date), dueDate: expect.any(Date) });
  })

  //Test get all shipments
  it('should get all shipments', async () => {
    const shipment = await service.createShipment({ orderId: '1' });
    const shipments = await service.getShipments();
    expect(shipments).toEqual([{ orderId: '1', id: '1', status: 'DISPATCHED', createdAt: expect.any(Date), dueDate: expect.any(Date) }]);
  })

  //Test change status from dispatched to mock
  it('should change status from Dispatched to PROGRESS', async () => {
    const shipment = await service.createShipment({ orderId: '1' });
    const updatedShipment = await service.changeStatus('1', 'PROGRESS');
    expect(updatedShipment).toEqual({ orderId: '1', id: '1', status: 'PROGRESS', createdAt: expect.any(Date), dueDate: expect.any(Date) });
  })

  //Test change status from progress to deliverd
  it('should change status from PROGRESS to DELIVERED', async () => {
    const shipment = await service.createShipment({ orderId: '1' });
    await service.changeStatus('1', 'PROGRESS');
    const updatedShipment = await service.changeStatus('1', 'DELIVERED');
    expect(updatedShipment).toEqual({ orderId: '1', id: '1', status: 'DELIVERED', createdAt: expect.any(Date), dueDate: expect.any(Date) });
  })

});
