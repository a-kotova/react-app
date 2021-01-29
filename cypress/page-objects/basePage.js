class BasePage {
  get signInIcon() {
    return cy.get('.sc-fFubgz[href="/signing"]');
  }

  get signOutIcon() {
    return cy.get('[data-test="sign-out-button"]');
  }

  get signUpFooterLink() {
    return cy.get('li a[href="/signing"]');
  }

  open(urlPath) {
    cy.visit(urlPath);
  }

  signOut() {
    this.signOutIcon.click();
  }
}

export default BasePage;
