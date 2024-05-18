import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShipmentService } from './shipment/shipment.service';
import { ShipmentModule } from './shipment/shipment.module';

@Module({
  imports: [ShipmentModule],
  controllers: [AppController],
  providers: [AppService, ShipmentService],
})
export class AppModule {}
