class BasePage {
  get signInIcon() {
    return cy.get('.sc-fFubgz[href="/signing"]');
  }

  get signOutIcon() {
    return cy.get('[data-test="sign-out-button"]');
  }

  open(urlPath) {
    cy.visit(urlPath);
  }
}

export default BasePage;
