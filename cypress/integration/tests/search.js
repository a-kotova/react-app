import Chance from 'chance';
import ShopPage from '../../page-objects/shopPage';
import products from '../../fixtures/products.json';
import SearchResultsPage from '../../page-objects/searchResultsPage';
import {
  pickTargetCategory, pickTargetProducts, getSubString,
} from '../../utils/helpers';

const chance = new Chance();

describe('Search', () => {
  it('TA-36: User can search for products by exact product name', () => {
    const targetCategory = pickTargetCategory(products);
    const [targetProduct] = pickTargetProducts(targetCategory);

    ShopPage.open('');
    ShopPage.searchForProduct(targetProduct.name);
    SearchResultsPage.getFoundProduct(targetProduct.id).should('be.visible');
  });

  it('TA-36.1: User can search for products by name substring', () => {
    const targetCategory = pickTargetCategory(products);
    const [targetProduct] = pickTargetProducts(targetCategory);
    const nameSubString = getSubString(targetProduct.name);

    ShopPage.open('');
    ShopPage.searchForProduct(nameSubString);
    SearchResultsPage.getFoundProduct(targetProduct.id).should('be.visible');
  });

  it('TA-37: Empty SERP is displayed when user submits invalid search query', () => {
    const searchQuery = chance.sentence({ words: 3 });

    ShopPage.open('');
    ShopPage.searchForProduct(searchQuery);
    SearchResultsPage.searchResults.should('not.exist');
    SearchResultsPage.emptySERP.should('be.visible');
  });

  it('TA-38.1: User should not be able to submit empty query', () => {
    ShopPage.open('');
    ShopPage.searchForProduct('');
    SearchResultsPage.searchResults.should('not.exist');
    cy.url().should('eq', Cypress.env('homeUrl'));
  });
});
