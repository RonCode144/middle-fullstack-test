import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { RegisterProductUseCase } from '../application/register-product.use-case';

@Controller('products')
export class ProductController {
  constructor(private readonly registerProductUseCase: RegisterProductUseCase) {}

  @Post()
  async register(@Body() body) {
    try {
      return await this.registerProductUseCase.execute(body);
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      throw new HttpException(error.message, error.getStatus ? error.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
