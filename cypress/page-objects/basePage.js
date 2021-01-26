export class BasePage {

  get homeCTA() {
    return cy.get('.sc-kstrdz a[href="/"]');
  }

  get searchBox() {
    return cy.get('input[type="search"]');
  }

  get shopCTA() {
    return cy.get('.sc-fFubgz[href="/shop"]');
  }

  get contactCTA() {
    return cy.get('.sc-fFubgz[href="/contact"]');
  }

  get signInCTA() {
    return cy.get('.sc-fFubgz[href="/signing"]');
  }

  get signOutCTA() {
    return cy.get('div').contains('SIGN OUT');
  }

  get cartIcon() {
    cy.get('.sc-bdfBwQ.flWUgh');
  }

  focusInSearchBox() {
    this.searchBox.click();
  }

  clickOnCartIcon() {
    this.cartIcon.click();
  }
}
