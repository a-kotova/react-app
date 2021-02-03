import CheckoutPage from '../../../page-objects/checkoutPage';
import products from '../../../fixtures/products.json';
import ShopPage from '../../../page-objects/shopPage';
import { pickRandomProduct } from '../../../utils/helpers';

describe('Checkout', () => {
  let randomProduct;

  beforeEach(() => {
    randomProduct = pickRandomProduct(products);
  });

  it('TA-20: Cart items count should be equal to number of added products', () => {
    const quantity = Cypress._.random(1, 12);
    ShopPage.navigateToCategory(randomProduct);
    ShopPage.addProductToCart(randomProduct, quantity);
    CheckoutPage.getCartQuantity().should('eq', quantity);
  });

  it('TA-21: Cart total should be correct', () => {
    ShopPage.navigateToCategory(randomProduct);
    ShopPage.addProductToCart(randomProduct);
    ShopPage.open('/checkout');
    CheckoutPage.getTotal().should('eq', randomProduct.price);
  });

  it('TA-22: User is able to increase product quantity', () => {
    ShopPage.navigateToCategory(randomProduct);
    ShopPage.addProductToCart(randomProduct);
    ShopPage.open('/checkout');
    CheckoutPage.increaseProductQuantity(randomProduct);
    CheckoutPage.getCartQuantity().should('eq', 2);
  });
});
