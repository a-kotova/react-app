import BasePage from './basePage';

class ShopPage extends BasePage {
  addProductToCart(product, quantity = 1) {
    cy.get(`#${product.id}`).parent().find('button').invoke('show')
      .contains('Add to Cart')
      .then((CTA) => {
        for (let i = 0; i < quantity; i++) {
          cy.wrap(CTA).click();
        }
      });
  }
}

export default new ShopPage();
