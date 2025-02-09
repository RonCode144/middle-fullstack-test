import { Module } from '@nestjs/common';
import { ProductRepository } from './infrastructure/product.repository';
import { RegisterProductUseCase } from './application/register-product.use-case';
import { ProductController } from './infrastructure/product.controller';

@Module({
  controllers: [ProductController],
  providers: [ProductRepository, RegisterProductUseCase],
})
export class ProductsModule {}
