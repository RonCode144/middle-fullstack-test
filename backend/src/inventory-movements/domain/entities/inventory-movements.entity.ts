export class InventoryMovement {
  constructor(
    public readonly id: string,
    public readonly productId: string,
    public readonly type: 'entry' | 'exit',
    public readonly quantity: number,
    public readonly date: Date = new Date(),
  ) {}
}
