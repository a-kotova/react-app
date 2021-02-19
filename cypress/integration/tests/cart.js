import CartPopUp from '../../page-objects/cartPopUp';
import products from '../../fixtures/products.json';
import { pickRandomProducts, pickTargetProducts } from '../../utils/helpers';
import ShopPage from '../../page-objects/shopPage';

describe('Cart tests', () => {
  let productsScope;
  let randomProducts;
  const quantity = 3;

  beforeEach(() => {
    productsScope = pickTargetProducts(products);
    randomProducts = pickRandomProducts(productsScope, quantity);
  });

  it('TA-26: Cart icon counter is updated properly when new product is added to the cart / Preview', () => {
    productsScope = pickTargetProducts(products, true);
    randomProducts = pickRandomProducts(productsScope, quantity);

    ShopPage.open('/shop');
    ShopPage.addProductToCartFromPreview(randomProducts);
    CartPopUp.getCartQuantity().should('eq', quantity);
  });

  it('TA-26.1: Cart icon counter is updated properly when new product is added to the cart / Preview', () => {
    ShopPage.addProductToCartFromOverview(randomProducts);
    CartPopUp.getCartQuantity().should('eq', quantity);
  });
});
