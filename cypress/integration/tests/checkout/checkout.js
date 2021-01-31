import Chance from 'Chance';
import CheckoutPage from '../../../page-objects/checkoutPage';
import products from '../../../fixtures/products.json';
import ShopPage from '../../../page-objects/shopPage';

const chance = new Chance();

describe('Checkout', () => {
  const pickedProduct = ShopPage.pickAnyProduct(products);

  it('TA-20: Cart items count should be equal to number of added products', () => {
    const quantity = chance.integer({ min: 1, max: 12 });
    ShopPage.addProductToCart(pickedProduct, quantity);
    CheckoutPage.getCartQuantity().should('eq', quantity);
  });

  it('TA-21: Cart total should be correct', () => {
    ShopPage.addProductToCart(pickedProduct);
    ShopPage.open('/checkout');
    CheckoutPage.getTotal().should('eq', pickedProduct.price);
  });

  it('TA-22: User is able to increase product quantity', () => {
    ShopPage.addProductToCart(pickedProduct);
    ShopPage.open('/checkout');
    CheckoutPage.increaseProductQuantity(pickedProduct);
    CheckoutPage.getCartQuantity().should('eq', 2);
  });
});
