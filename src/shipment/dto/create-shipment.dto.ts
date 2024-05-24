import { IsString, IsDate, IsEnum, IsNotEmpty } from 'class-validator';
import { Status } from '@prisma/client';

export class CreateShipmentDto {
  @IsString()
  @IsNotEmpty()
  orderID: string;

  @IsString()
  @IsNotEmpty()
  destiny: string;

  @IsEnum(Status)
  @IsNotEmpty()
  status: Status;

  @IsDate()
  @IsNotEmpty()
  dueDate: Date;
}
