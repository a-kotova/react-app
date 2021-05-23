import BasePage from './basePage';

class CartPopUp extends BasePage {
  get emptyState() {
    return cy.get('div[data-test="header"]>div:last-child span');
  }

  get goToCheckoutCTA() {
    return cy.get('div[data-test="header"]>div:last-child button');
  }

  expandCartPopUp() {
    return cy.contains('SHOP').parent().find('div:last-child > span').click();
  }

  getTargetProduct(product) {
    return cy.get(`div[data-test="cart-item-${product.id}"]`);
  }

  getProductQuantity(product) {
    return cy.get(`span[data-test="item-total-${product.id}"]`).invoke('text').then((text) => {
      return Number.parseInt(text.split('x')[0], 10);
    });
  }

  getProductRowsNumber() {
    return cy.get('div[data-test^="cart-item"]');
  }

  clickGoToCheckoutCTA() {
    return this.goToCheckoutCTA.click();
  }
}

export default new CartPopUp();
