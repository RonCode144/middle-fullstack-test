import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InventoryNotificationEntity } from 'src/inventory-movements/domain/entities/inventory-notification.entity';

@Injectable()
export class InventoryNotificationRepository {
  constructor(
    @InjectRepository(InventoryNotificationEntity)
    private readonly repo: Repository<InventoryNotificationEntity>,
  ) {}

  async save(notification: { productId: string; remainingStock: number }) {
    const newNotification = this.repo.create({
      productId: notification.productId,
      remainingStock: notification.remainingStock,
    });
    return await this.repo.save(newNotification);
  }
}
