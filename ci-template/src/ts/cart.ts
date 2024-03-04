import Buyable from './buyable';

export default class Cart {
  private items: Buyable[] = [];

  addItem(item: Buyable): void {
    this.items.push(item);
  }

  removeItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  getTotalCost(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getTotalCostWithDiscount(discount: number): number {
    const totalCost = this.getTotalCost();
    return totalCost - (totalCost * (discount / 100));
  }

  getItems(): Buyable[] {
    return this.items;
  }
}
