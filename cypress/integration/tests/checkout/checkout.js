import CheckoutPage from '../../../page-objects/checkoutPage';
import products from '../../../fixtures/products.json';
import ShopPage from '../../../page-objects/shopPage';
import { pickTargetCategory, pickTargetProducts } from '../../../utils/helpers';

const { _ } = Cypress;

describe('Checkout', () => {
  let targetCategory;
  let targetProduct;

  beforeEach(() => {
    targetCategory = pickTargetCategory(products);
    [targetProduct] = pickTargetProducts(targetCategory);
  });

  it('TA-20: Cart items count should be equal to number of added products', () => {
    const quantity = _.random(1, 12);
    ShopPage.open(targetCategory.linkUrl);
    ShopPage.addProductToCart([targetProduct], quantity);
    CheckoutPage.getCartQuantity().should('eq', quantity);
  });

  it('TA-21: Cart total should be correct', () => {
    const quantity = _.random(1, 12);
    ShopPage.open(targetCategory.linkUrl);
    ShopPage.addProductToCart([targetProduct], quantity);
    ShopPage.open('/checkout');
    CheckoutPage.getTotal().should('eq', targetProduct.price * quantity);
  });

  it('TA-22: User is able to increase product quantity', () => {
    const quantity = _.random(1, 11);
    ShopPage.open(targetCategory.linkUrl);
    ShopPage.addProductToCart([targetProduct], quantity);
    ShopPage.open('/checkout');
    CheckoutPage.increaseProductQuantity(targetProduct);
    CheckoutPage.getCartQuantity().should('eq', quantity + 1);
    CheckoutPage.getTotal().should('eq', targetProduct.price * (quantity + 1));
  });

  it('TA-23: User is able to decrease product quantity', () => {
    const quantity = _.random(2, 12);
    ShopPage.open(targetCategory.linkUrl);
    ShopPage.addProductToCart([targetProduct], quantity);
    ShopPage.open('/checkout');
    CheckoutPage.decreaseProductQuantity(targetProduct);
    CheckoutPage.getCartQuantity().should('eq', quantity - 1);
    CheckoutPage.getTotal().should('eq', targetProduct.price * (quantity - 1));
  });

  it('TA-24: User is able to delete product from the cart by clicking on "X" CTA', () => {
    ShopPage.open(targetCategory.linkUrl);
    ShopPage.addProductToCart([targetProduct]);
    ShopPage.open('/checkout');
    CheckoutPage.deleteProduct(targetProduct);
    CheckoutPage.getCartQuantity().should('eq', 0);
    CheckoutPage.getTotal().should('eq', 0);
  });

  it('TA-24.1: New item rows should not be added if user add same products', () => {
    const quantity = _.random(2, 12);
    ShopPage.open(targetCategory.linkUrl);
    ShopPage.addProductToCart([targetProduct], quantity);
    ShopPage.open('/checkout');
    CheckoutPage.getProductRowsNumber(targetProduct).should('eq', 1);
  });

  it('TA-25.1: User should be able to proceed to payment', () => {
    CheckoutPage.open('/checkout');
    CheckoutPage.clickPayNowButton();
    CheckoutPage.paymentModal.should('be.visible');
  });
});
