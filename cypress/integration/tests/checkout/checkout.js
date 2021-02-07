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
    ShopPage.open(randomProduct.linkUrl);
    ShopPage.addProductToCart(randomProduct, quantity);
    CheckoutPage.getCartQuantity().should('eq', quantity);
  });

  it('TA-21: Cart total should be correct', () => {
    const quantity = Cypress._.random(1, 12);
    ShopPage.open(randomProduct.linkUrl);
    ShopPage.addProductToCart(randomProduct, quantity);
    ShopPage.open('/checkout');
    CheckoutPage.getTotal().should('eq', randomProduct.price * quantity);
  });

  it('TA-22: User is able to increase product quantity', () => {
    const quantity = Cypress._.random(1, 11);
    ShopPage.open(randomProduct.linkUrl);
    ShopPage.addProductToCart(randomProduct, quantity);
    ShopPage.open('/checkout');
    CheckoutPage.increaseProductQuantity(randomProduct);
    CheckoutPage.getCartQuantity().should('eq', quantity + 1);
    CheckoutPage.getTotal().should('eq', randomProduct.price * (quantity + 1));
  });

  it('TA-23: User is able to decrease product quantity', () => {
    const quantity = Cypress._.random(2, 12);
    ShopPage.open(randomProduct.linkUrl);
    ShopPage.addProductToCart(randomProduct, quantity);
    ShopPage.open('/checkout');
    CheckoutPage.decreaseProductQuantity(randomProduct);
    CheckoutPage.getCartQuantity().should('eq', quantity - 1);
    CheckoutPage.getTotal().should('eq', randomProduct.price * (quantity - 1));
  });

  it('TA-24: User is able to delete product from the cart by clicking on "X" CTA', () => {
    ShopPage.open(randomProduct.linkUrl);
    ShopPage.addProductToCart(randomProduct);
    ShopPage.open('/checkout');
    CheckoutPage.deleteProduct(randomProduct);
    CheckoutPage.getCartQuantity().should('eq', 0);
    CheckoutPage.getTotal().should('eq', 0);
  });

  it('TA-24.1: New item rows should not be added if user add same products', () => {
    const quantity = Cypress._.random(2, 12);
    ShopPage.open(randomProduct.linkUrl);
    ShopPage.addProductToCart(randomProduct, quantity);
    ShopPage.open('/checkout');
    CheckoutPage.getProductRowsNumber(randomProduct).should('eq', 1);
  });

  it('TA-25.1: User should be able to proceed to payment', () => {
    CheckoutPage.open('/checkout');
    CheckoutPage.clickPayNowButton();
    CheckoutPage.paymentModal.should('be.visible');
  });
});
