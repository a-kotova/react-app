import BasePage from './basePage';

class CheckoutPage extends BasePage {
  get total() {
    return cy.contains('Total');
  }

  get cartQuantity() {
    return cy.contains('SHOP').parent().find('div:last-child > span');
  }

  get paymentButton() {
    return cy.contains('Pay Now');
  }

  get paymentModal() {
    return cy.get('iframe[name="stripe_checkout_app"]');
  }

  getCartQuantity() {
    return this.cartQuantity.then(($quantity) => cy.wrap(Number.parseInt($quantity.text(), 10)));
  }

  getIncreaseQuantityArrow(product) {
    return cy.contains(`${product.name}`).next().find('div:last-child');
  }

  getDecreaseQuantityArrow(product) {
    return cy.contains(`${product.name}`).next().find('div:first-child');
  }

  getDeleteItemIcon(product) {
    return cy.contains(`${product.name}`).parent().find('div').last();
  }

  getProductRowsNumber(product) {
    return cy.contains(`${product.name}`).parent().then((rows) => cy.wrap(rows.length));
  }

  getTotal() {
    return this.total.then(($total) => cy.wrap(Number.parseInt($total.text().match(/\d+$/)[0], 10)));
  }

  increaseProductQuantity(product) {
    this.getIncreaseQuantityArrow(product).click();
  }

  decreaseProductQuantity(product) {
    this.getDecreaseQuantityArrow(product).click();
  }

  deleteProduct(product) {
    this.getDeleteItemIcon(product).click();
  }

  clickPayNowButton() {
    this.paymentButton.click();
  }
}

export default new CheckoutPage();
