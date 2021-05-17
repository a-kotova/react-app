class BasePage {
  get signInIcon() {
    return cy.get('.sc-fFubgz[href="/signing"]');
  }

  get signOutIcon() {
    return cy.get('[data-test="sign-out-button"]');
  }

  get cartQuantity() {
    return cy.contains('SHOP').parent().find('div:last-child > span');
  }

  open(urlPath) {
    cy.visit(urlPath);
  }

  signOut() {
    this.signOutIcon.click();
  }

  getCartQuantity() {
    return this.cartQuantity.then(($quantity) => cy.wrap(Number.parseInt($quantity.text(), 10)));
  }
}

export default BasePage;
