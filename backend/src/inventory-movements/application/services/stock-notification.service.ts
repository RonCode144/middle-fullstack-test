import { Injectable } from '@nestjs/common';

@Injectable()
export class StockNotificationService {
  notifyStockCritical(productId: string, stock: number) {
    console.log(`Stock critical for product ${productId}. Remaining stock: ${stock}`);
  }
}
