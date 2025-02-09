import { Injectable, BadRequestException } from '@nestjs/common';
import { InventoryMovementRepository } from '../../infrastructure/repositories/inventory-movement.repository';
import { ProductRepository } from '../../../products/infrastructure/repositories/product.repository';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InventoryEvent } from 'src/inventory-movements/domain/events/inventory.event';

@Injectable()
export class RegisterMovementUseCase {
  constructor(
    private readonly inventoryRepo: InventoryMovementRepository,
    private readonly productRepo: ProductRepository,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async execute(dto: { productId: string; type: 'entry' | 'exit'; quantity: number }) {
    const product = await this.productRepo.findOneById(dto.productId);
    if (!product) throw new BadRequestException('Product not found');

    if (dto.type === 'exit' && product && product.stock < dto.quantity) {
      throw new BadRequestException('Insufficient stock');
    }

    // Update stock
    product?.updateStock(dto.type, dto.quantity);
    await this.productRepo.save(product);

    await this.inventoryRepo.save({
      id: 'generated-id', // replace with actual ID generation logic
      productId: dto.productId,
      type: dto.type,
      quantity: dto.quantity,
      date: new Date(),
    });

    // Issue event if stock is critical
    if (product && product.stock <= 5 && product.id) {
      this.eventEmitter.emit('inventory.stockCritical', new InventoryEvent(product.id, product.stock));
    }
  }
}
