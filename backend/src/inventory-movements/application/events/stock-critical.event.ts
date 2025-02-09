export class StockCriticalEvent  {
  constructor(
    public readonly productId: string,
    public readonly remainingStock: number,
  ) {}
}
