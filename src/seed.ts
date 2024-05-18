import { PrismaClient, Status } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const shipments = [
    {
      orderID: '12345',
      destiny: '123 Main St, Springfield',
      status: Status.DISPATCHED,
      dueDate: new Date('2024-06-30T10:00:00Z'),
    },
    {
      orderID: '67890',
      destiny: '456 Elm St, Shelbyville',
      status: Status.PROGRESS,
      dueDate: new Date('2024-07-15T12:00:00Z'),
    },
    {
      orderID: '54321',
      destiny: '789 Oak St, Capital City',
      status: Status.DELIVERED,
      dueDate: new Date('2024-08-01T09:00:00Z'),
    },
    {
      orderID: '98765',
      destiny: '321 Maple St, Springfield',
      status: Status.DISPATCHED,
      dueDate: new Date('2024-08-15T08:00:00Z'),
    },
    {
      orderID: '24680',
      destiny: '654 Oak St, Shelbyville',
      status: Status.PROGRESS,
      dueDate: new Date('2024-09-01T14:00:00Z'),
    },
    {
      orderID: '13579',
      destiny: '987 Elm St, Capital City',
      status: Status.DELIVERED,
      dueDate: new Date('2024-09-15T11:00:00Z'),
    },
  ];

  for (const shipment of shipments) {
    await prisma.shipment.create({
      data: shipment,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
