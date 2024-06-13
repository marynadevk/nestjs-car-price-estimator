import {
  IsString,
  IsNumber,
  Min,
  Max,
  IsLongitude,
  IsLatitude,
} from 'class-validator';
import { MAX_VALUE } from '../../constants';
export class CreateReportDto {
  @IsNumber()
  @Min(0)
  @Max(MAX_VALUE)
  price: number;

  @IsString()
  madeBy: string;

  @IsString()
  model: string;

  @IsNumber()
  @Min(1930)
  @Max(2050)
  year: number;

  @IsLatitude()
  lat: number;

  @IsLongitude()
  lng: number;

  @IsNumber()
  @Min(0)
  @Max(MAX_VALUE)
  mileage: number;
}
