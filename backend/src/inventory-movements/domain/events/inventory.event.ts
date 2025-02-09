export class InventoryEvent {
  constructor(
    public readonly productId: string,
    public readonly remainingStock: number,
  ) {}
}
