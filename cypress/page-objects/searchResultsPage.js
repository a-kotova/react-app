import BasePage from './basePage';

class Search extends BasePage {
  get emptySERP() {
    return cy.contains('Nothing found...');
  }

  get anySearchResults() {
    return cy.get('div[data-test^=item-container]');
  }

  getFoundProduct(id) {
    return cy.get(`div[data-test=item-container-${id}]`);
  }
}

export default new Search();
