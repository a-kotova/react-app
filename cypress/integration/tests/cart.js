import CartPopUp from '../../page-objects/cartPopUp';
import products from '../../fixtures/products.json';
import { pickTargetCategory, pickTargetProducts } from '../../utils/helpers';
import ShopPage from '../../page-objects/shopPage';
import CheckoutPage from '../../page-objects/checkoutPage';
import { emptyStates } from '../../fixtures/informationalMessages';

const { _ } = Cypress;

describe('Cart tests', () => {

  it('TA-26: Cart icon counter is updated properly if add new products from "Shop" page', () => {
    const quantity = 3;
    const productCategory = pickTargetCategory(products);
    const targetProducts = pickTargetProducts(productCategory, quantity, true);

    ShopPage.open('/shop');
    ShopPage.addProductToCart(targetProducts);
    CartPopUp.getCartQuantity().should('eq', quantity);
  });

  it('TA-26.1: Cart icon counter is updated properly if add new products from category page', () => {
    const quantity = 3;
    const productCategory = pickTargetCategory(products);
    const targetProducts = pickTargetProducts(productCategory, quantity);

    ShopPage.open(productCategory.linkUrl);
    ShopPage.addProductToCart(targetProducts);
    CartPopUp.getCartQuantity().should('eq', quantity);
  });

  it('TA-27: Cart icon counter is updated properly when product is removed from the cart', () => {
    const productCategory = pickTargetCategory(products);
    const [targetProduct] = pickTargetProducts(productCategory);
    const productAmount = _.random(2, 12);

    ShopPage.open(productCategory.linkUrl);
    ShopPage.addProductToCart([targetProduct], productAmount);
    ShopPage.open('/checkout');
    CheckoutPage.decreaseProductQuantity(targetProduct);
    CartPopUp.getCartQuantity().should('eq', productAmount - 1);
  });

  it('TA-34: Counter on the cart icon is 0 when cart is empty', () => {
    ShopPage.open('');
    CartPopUp.getCartQuantity().should('eq', 0);
  });

  it('TA-28: Added product name is displayed properly in the cart', () => {
    const productCategory = pickTargetCategory(products);
    const [targetProduct] = pickTargetProducts(productCategory);

    ShopPage.open(productCategory.linkUrl);
    ShopPage.addProductToCart([targetProduct]);
    ShopPage.open('/checkout');
    CheckoutPage.getProductName(targetProduct).should('eq', targetProduct.name);
  });

  it('TA-29: Added product total is displayed properly in cart', () => {
    const productCategory = pickTargetCategory(products);
    const [targetProduct] = pickTargetProducts(productCategory);
    const productAmount = _.random(2, 12);

    ShopPage.open(productCategory.linkUrl);
    ShopPage.addProductToCart([targetProduct], productAmount);
    ShopPage.open('/checkout');
    CheckoutPage.getTotal().should('eq', targetProduct.price * productAmount);
  });

  it('TA-30: Product is removed from cart pop-up when it is deleted from the cart', () => {
    const productCategory = pickTargetCategory(products);
    const [targetProduct] = pickTargetProducts(productCategory);

    ShopPage.open(productCategory.linkUrl);
    ShopPage.addProductToCart([targetProduct]);
    ShopPage.open('/checkout');
    CheckoutPage.deleteProduct(targetProduct);
    CartPopUp.expandCartPopUp();
    CartPopUp.getTargetProduct(targetProduct).should('not.exist');
  });

  it('TA-31: Product quantity updates properly on cart pop-up when quantity is increased', () => {
    const productCategory = pickTargetCategory(products);
    const [targetProduct] = pickTargetProducts(productCategory);
    const productAmount = _.random(1, 11);

    ShopPage.open(productCategory.linkUrl);
    ShopPage.addProductToCart([targetProduct], productAmount);
    ShopPage.open('/checkout');
    CheckoutPage.increaseProductQuantity(targetProduct);
    CartPopUp.expandCartPopUp();
    CartPopUp.getProductQuantity(targetProduct).should('eq', productAmount + 1);
  });

  it('TA-32: Product quantity updates properly on cart pop-up when quantity is decreased', () => {
    const productCategory = pickTargetCategory(products);
    const [targetProduct] = pickTargetProducts(productCategory);
    const productAmount = _.random(2, 12);

    ShopPage.open(productCategory.linkUrl);
    ShopPage.addProductToCart([targetProduct], productAmount);
    ShopPage.open('/checkout');
    CheckoutPage.decreaseProductQuantity(targetProduct);
    CartPopUp.expandCartPopUp();
    CartPopUp.getProductQuantity(targetProduct).should('eq', productAmount - 1);
  });

  it('TA-33: Empty state is shown on cart pop-up when cart is empty', () => {
    const productCategory = pickTargetCategory(products);
    const [targetProduct] = pickTargetProducts(productCategory);

    ShopPage.open(productCategory.linkUrl);
    ShopPage.addProductToCart([targetProduct]);
    ShopPage.open('/checkout');
    CheckoutPage.deleteProduct(targetProduct);
    CartPopUp.expandCartPopUp();
    CartPopUp.emptyState.should('contain', emptyStates.emptyCartPopUp);
  });

  it.only('TA-35: Cart items count should be equal to number of added products', () => {
    const quantity = _.random(1, 5);
    const productCategory = pickTargetCategory(products);
    const targetProducts = pickTargetProducts(productCategory, quantity);

    ShopPage.open(productCategory.linkUrl);
    ShopPage.addProductToCart(targetProducts);
    CartPopUp.expandCartPopUp();
    CartPopUp.getProductRowsNumber().should('have.length', quantity);
  });

  it('TA-35.1: User should be able to proceed to Checkout', () => {
    ShopPage.open('');
    CartPopUp.expandCartPopUp();
    CartPopUp.clickGoToCheckoutCTA();
    cy.url().should('contain', '/checkout');
  });
});
