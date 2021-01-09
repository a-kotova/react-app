class Header {
  getHomeCTA() {
    return cy.get('.sc-kstrdz a[href="/"]');
  }

  focusInSearchBox() {
    return cy.get('input[type="search"]').click();
  }

  getShopCTA() {
    return cy.get('.sc-fFubgz[href="/shop"]');
  }

  getContactCTA() {
    return cy.get('.sc-fFubgz[href="/contact"]');
  }

  getSignInCTA() {
    return cy.get('.sc-fFubgz[href="/signing"]');
  }

  getSignOutCTA() {
    return cy.get('div').contains('SIGN OUT');
  }

  clickOnCartIcon() {
    cy.get('.sc-bdfBwQ.flWUgh').click();
  }
}

export default new Header();
