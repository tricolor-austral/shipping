import { IsString, IsDate, IsEnum, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
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
  @Type(() => Date)
  @IsNotEmpty()
  dueDate: Date;
}
