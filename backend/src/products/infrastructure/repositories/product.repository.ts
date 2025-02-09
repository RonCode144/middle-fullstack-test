import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Product } from '../../domain/entities/product.entity';

@Injectable()
export class ProductRepository {
  async findOneById(productId: string): Promise<Product | null> {
    return this.repo.findOne({ where: { id: productId } });
  }

  constructor(private readonly repo: Repository<Product>) {}

  async save(product: Product) {
    return this.repo.save(product);
  }

  async findBySku(sku: string): Promise<Product | null> {
    return this.repo.findOne({ where: { sku } });
  }
}
