import BasePage from './basePage';

class ShopPage extends BasePage {
  addProductToCart(pickedItem, quantity = 1) {
    cy.get(`#${pickedItem.id}`).parent().find('button').invoke('show')
      .contains('Add to Cart')
      .then((CTA) => {
        for (let i = 0; i < quantity; i++) {
          cy.wrap(CTA).click();
        }
      });
  }

  addProductToCartFromOverview(products, quantity = 1) {
    products.forEach((product) => {
      this.open(product.linkUrl);
      this.addProductToCart(product, quantity);
    });
  }

  addProductToCartFromPreview(products, quantity = 1) {
    products.forEach((product) => {
      this.addProductToCart(product, quantity);
    });
  }
}

export default new ShopPage();
