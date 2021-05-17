import CartPopUp from '../../page-objects/cartPopUp';
import products from '../../fixtures/products.json';
import { pickTargetCategory, pickTargetProducts } from '../../utils/helpers';
import ShopPage from '../../page-objects/shopPage';

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
});
