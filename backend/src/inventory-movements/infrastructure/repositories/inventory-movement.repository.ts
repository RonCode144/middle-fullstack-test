import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InventoryMovement } from 'src/inventory-movements/domain/entities/inventory-movements.entity';

@Injectable()
export class InventoryMovementRepository {
  constructor(
    @InjectRepository(InventoryMovement)
    private readonly repo: Repository<InventoryMovement>,
  ) {}

  async save(movement: InventoryMovement) {
    return this.repo.save(movement);
  }
}
