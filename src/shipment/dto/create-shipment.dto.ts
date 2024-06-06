import { IsString, IsNotEmpty } from 'class-validator';

export class CreateShipmentDto {
  @IsString()
  @IsNotEmpty()
  orderID: string;

}
