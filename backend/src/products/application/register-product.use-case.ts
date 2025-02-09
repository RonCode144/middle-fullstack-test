import { ProductRepository } from '../infrastructure/product.repository';
import { ConflictException } from '@nestjs/common';
import { ProductEntity } from '../infrastructure/product.entity';

export class RegisterProductUseCase {
  constructor(private readonly productRepo: ProductRepository) {}

  async execute(dto: { sku: string; name: string; price: number; stock: number }) {
    const existe = await this.productRepo.findBySku(dto.sku);
    if (existe) throw new ConflictException('SKU ya registrado');

    const product = new ProductEntity();
    Object.assign(product, dto);
    return this.productRepo.save(product);
  }
}
