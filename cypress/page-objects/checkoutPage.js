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
      let quantity = $quantity.text();
      quantity = Number.parseInt(quantity, 10);
      return cy.wrap(quantity);
    });
  }

  getIncreaseQuantityArrow(product) {
    return cy.contains(`${product.name}`).next().find('div:last-child');
  }

  getTotal() {
    return this.total.then(($total) => {
      let total = $total.text();
      total = total.match(/\d+$/);
      total = Number.parseInt(total[0], 10);
      return cy.wrap(total);
    });
  }

  increaseProductQuantity(product) {
    this.getIncreaseQuantityArrow(product).click();
  }
}

export default new CheckoutPage();
