import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { StockCriticalEvent  } from '../events/stock-critical.event';
import { InventoryNotificationRepository } from '../infrastructure/repositories/inventory-notification.repository';

@Injectable()
export class StockNotificationListener {
  constructor(private readonly notificationRepo: InventoryNotificationRepository) {}

  @OnEvent('inventory.stockCritical')
  async handleStockCriticalEvent(event: StockCriticalEvent ) {
    console.log(`Stock critical for product ${event.productId}. Remaining stock: ${event.remainingStock}`);

    // Save notifications in DB
    await this.notificationRepo.save({
      productId: event.productId,
      remainingStock: event.remainingStock,
    });
  }
}
