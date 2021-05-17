import CartPopUp from '../../page-objects/cartPopUp';
import products from '../../fixtures/products.json';
import { pickTargetCategory, pickTargetProducts } from '../../utils/helpers';
import ShopPage from '../../page-objects/shopPage';
import CheckoutPage from '../../page-objects/checkoutPage';

const { _ } = Cypress;

describe('Cart tests', () => {
  let productCategory;
  let targetProducts;
  const quantity = 3;

  it('TA-26: Cart icon counter is updated properly if add new products from "Shop" page', () => {
    productCategory = pickTargetCategory(products);
    targetProducts = pickTargetProducts(productCategory, quantity, true);

    ShopPage.open('/shop');
    ShopPage.addProductToCart(targetProducts);
    CartPopUp.getCartQuantity().should('eq', quantity);
  });

  it('TA-26.1: Cart icon counter is updated properly if add new products from category page', () => {
    productCategory = pickTargetCategory(products);
    targetProducts = pickTargetProducts(productCategory, quantity);

    ShopPage.open(productCategory.linkUrl);
    ShopPage.addProductToCart(targetProducts);
    CartPopUp.getCartQuantity().should('eq', quantity);
  });

  it('TA-27: Cart icon counter is updated properly when product is removed from the cart', () => {
    productCategory = pickTargetCategory(products);
    [targetProducts] = pickTargetProducts(productCategory);
    const productAmount = _.random(2, 12);

    ShopPage.open(productCategory.linkUrl);
    ShopPage.addProductToCart([targetProducts], productAmount);
    ShopPage.open('/checkout');
    CheckoutPage.decreaseProductQuantity(targetProducts);
    CartPopUp.getCartQuantity().should('eq', productAmount - 1);
  });

  it('TA-34: Counter on the cart icon is 0 when cart is empty', () => {
    ShopPage.open('');
    CartPopUp.getCartQuantity().should('eq', 0);
  });

  it('TA-28: Added product name is displayed properly in the cart', () => {
    productCategory = pickTargetCategory(products);
    [targetProducts] = pickTargetProducts(productCategory);

    ShopPage.open(productCategory.linkUrl);
    ShopPage.addProductToCart([targetProducts]);
    ShopPage.open('/checkout');
    CheckoutPage.getProductName(targetProducts).should('eq', targetProducts.name);
  });
});
