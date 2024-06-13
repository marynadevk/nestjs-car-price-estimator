import {
  IsString,
  IsNumber,
  Min,
  Max,
  IsLongitude,
  IsLatitude,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { toInt, toFloat } from '../../helpers/number.helper';
import { MAX_VALUE, MAX_YEAR, MIN_YEAR } from '../../constants';

export class GetEstimateDto {
  @IsString()
  madeBy: string;

  @IsString()
  model: string;

  @Transform(toInt)
  @IsNumber()
  @Min(MIN_YEAR)
  @Max(MAX_YEAR)
  year: number;

  @Transform(toFloat)
  @IsLatitude()
  lat: number;

  @Transform(toFloat)
  @IsLongitude()
  lng: number;

  @Transform(toInt)
  @IsNumber()
  @Min(0)
  @Max(MAX_VALUE)
  mileage: number;
}
