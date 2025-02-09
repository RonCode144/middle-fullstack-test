export class Product {
  constructor(
    public readonly id: string,
    public readonly sku: string,
    public readonly name: string,
    public readonly price: number,
    public stock: number
  ) {}
  
  updateStock(type: string, quantity: number) {
    if (type === 'add') {
      this.addToStock(quantity);
    } else if (type === 'subtract') {
      this.subtractToStock(quantity);
    } else {
      throw new Error('Invalid stock update type');
    }
  }
  
  subtractToStock(quantity: number) {
    if (this.stock < quantity) {
      throw new Error("There is not enough stock");
    }
    this.stock -= quantity;
  }

  addToStock(quantity: number) {
    this.stock += quantity;
  }

  isCriticalStock(): boolean {
    return this.stock <= 5;
  }
}
