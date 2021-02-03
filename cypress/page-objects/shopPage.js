import BasePage from './basePage';

class ShopPage extends BasePage {
  navigateToCategory(pickedItem) {
    this.open(pickedItem.linkUrl);
  }

  addProductToCart(pickedItem, quantity = 1) {
    cy.get(`div[name="${pickedItem.name}"]`).parent().find('button').invoke('show')
      .contains('Add to Cart')
      .then((CTA) => {
        for (let i = 0; i < quantity; i++) {
          cy.wrap(CTA).click();
        }
      });
  }
}

export default new ShopPage();
