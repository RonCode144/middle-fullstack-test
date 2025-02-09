import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { InventoryMovementEntity } from './infrastructure/entities/inventory-movement.entity';
import { InventoryMovementRepository } from './infrastructure/repositories/inventory-movement.repository';
import { ProductRepository } from 'src/products/infrastructure/repositories/product.repository';
import { RegisterMovementUseCase } from './application/use-cases/register-movement.use-case';
import { InventoryMovementController } from './infrastructure/inventory-movement.controller';
import { StockNotificationListener } from './application/listeners/stock-notification.listener';
import { InventoryNotificationEntity } from './domain/entities/inventory-notification.entity';
import { InventoryNotificationRepository } from './application/infrastructure/repositories/inventory-notification.repository';

@Module({
  imports: [TypeOrmModule.forFeature([
      InventoryMovementEntity,
      InventoryNotificationEntity
    ]),
    EventEmitterModule.forRoot()
  ],
  controllers: [InventoryMovementController],
  providers: [
    InventoryMovementRepository,
    RegisterMovementUseCase,
    ProductRepository,
    StockNotificationListener,
    InventoryNotificationRepository
  ],
})
export class InventoryMovementsModule {}
