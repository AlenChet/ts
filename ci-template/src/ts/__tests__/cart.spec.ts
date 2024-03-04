import Cart from '../cart';
import Buyable from '../buyable';

describe('Cart', () => {
  let cart: Cart;
  let item1: Buyable;
  let item2: Buyable;

  beforeEach(() => {
    cart = new Cart();
    item1 = { id: 1, name: 'Item 1', price: 100 };
    item2 = { id: 2, name: 'Item 2', price: 200 };
  });

  it('should add item to cart', () => {
    cart.addItem(item1);
    expect(cart.getItems()).toEqual([item1]);
  });

  it('should remove item from cart', () => {
    cart.addItem(item1);
    cart.addItem(item2);
    cart.removeItem(item1.id);
    expect(cart.getItems()).toEqual([item2]);
  });

  it('should calculate total cost correctly', () => {
    cart.addItem(item1);
    cart.addItem(item2);
    expect(cart.getTotalCost()).toBe(300);
  });

  it('should calculate total cost with discount correctly', () => {
    cart.addItem(item1);
    cart.addItem(item2);
    expect(cart.getTotalCostWithDiscount(10)).toBe(270); 
  });
});
