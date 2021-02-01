import Chance from 'Chance';
import CheckoutPage from '../../../page-objects/checkoutPage';
import products from '../../../fixtures/products.json';
import ShopPage from '../../../page-objects/shopPage';

const chance = new Chance();

describe('Checkout', () => {
  beforeEach(() => {
    cy.wrap(ShopPage.pickRandomProduct(products)).as('randomProduct');
  });

  it('TA-20: Cart items count should be equal to number of added products', function () {
    const quantity = chance.integer({ min: 1, max: 12 });
    ShopPage.addProductToCart(this.randomProduct, quantity);
    CheckoutPage.getCartQuantity().should('eq', quantity);
  });

  it('TA-21: Cart total should be correct', function () {
    ShopPage.addProductToCart(this.randomProduct);
    ShopPage.open('/checkout');
    CheckoutPage.getTotal().should('eq', this.randomProduct.price);
  });

  it('TA-22: User is able to increase product quantity', function () {
    ShopPage.addProductToCart(this.randomProduct);
    ShopPage.open('/checkout');
    CheckoutPage.increaseProductQuantity(this.randomProduct);
    CheckoutPage.getCartQuantity().should('eq', 2);
  });
});
