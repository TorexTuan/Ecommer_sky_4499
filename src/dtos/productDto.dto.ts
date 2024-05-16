import { IsNumber, IsString } from 'class-validator';

export class ProductDto {
  @IsString({ message: 'must be a string' })
  name: string;

  @IsNumber()
  price: number;
}
