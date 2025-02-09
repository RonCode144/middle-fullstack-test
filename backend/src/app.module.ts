import { Module } from '@nestjs/common';
import { DatabaseModule } from './shared/database.module';
import { ProductsModule } from './products/products.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { InventoryMovementsModule } from './inventory-movements/inventory-movements.module';

@Module({
  imports: [
    DatabaseModule,
    ProductsModule,
    EventEmitterModule.forRoot(),
    InventoryMovementsModule,
  ]
})
export class AppModule {}
