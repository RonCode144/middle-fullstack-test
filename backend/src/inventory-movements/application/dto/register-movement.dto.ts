import { IsUUID, IsEnum, IsInt, Min } from 'class-validator';

export class RegisterMovementDto {
  @IsUUID()
  productId: string;

  @IsEnum(['entry', 'exit'])
  type: 'entry' | 'exit';

  @IsInt()
  @Min(1)
  quantity: number;
}
