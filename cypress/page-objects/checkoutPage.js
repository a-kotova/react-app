import BasePage from './basePage';

class CheckoutPage extends BasePage {
  get total() {
    return cy.contains('Total');
  }

  get cartQuantity() {
    return cy.contains('SHOP').parent().find('div:last-child > span');
  }

  getCartQuantity() {
    return this.cartQuantity.then(($quantity) => {
      return cy.wrap(Number.parseInt($quantity.text(), 10));
    });
  }

  getIncreaseQuantityArrow(product) {
    return cy.contains(`${product.name}`).next().find('div:last-child');
  }

  getTotal() {
    return this.total.then(($total) => {
      return cy.wrap(Number.parseInt($total.text().match(/\d+$/)[0], 10));
    });
  }

  increaseProductQuantity(product) {
    this.getIncreaseQuantityArrow(product).click();
  }
}

export default new CheckoutPage();
