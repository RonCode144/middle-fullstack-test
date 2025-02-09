import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { RegisterMovementUseCase } from '../application/use-cases/register-movement.use-case';

@Controller('inventory-movements')
export class InventoryMovementController {
  constructor(private readonly registerMovementUseCase: RegisterMovementUseCase) {}

  @Post()
  async register(@Body() body: any) {
    try {
      return await this.registerMovementUseCase.execute(body);
    } catch (error: unknown) {
      if (error instanceof HttpException) {
        throw new HttpException(error.message, error.getStatus());
      } else {
        if (error instanceof Error) {
          throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        } else {
          throw new HttpException('Unknown error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
    }
  }
}
