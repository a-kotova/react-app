const Chance = require('chance');
const Homepage = require('../pages/homepage.page');
const SearchResultsPage = require('../pages/search-results.page');
const { getRandomProduct } = require('../service/data-providers');
const { filterProductsByNameSubstring, getProductNameSubstring } = require('../service/data-handlers');

const chance = new Chance();

describe('Search', () => {
  it('TA-36: User can search for products by exact product name', () => {
    const product = getRandomProduct();

    Homepage.open('/');
    Homepage.searchForProduct(product.name);
    expect(SearchResultsPage.getFoundProductById(product.id)).toBeDisplayed();
  });

  it('TA-36.1: User can search for products by product name substring', () => {
    const product = getRandomProduct();
    const query = getProductNameSubstring(product.name);
    const expectedProducts = filterProductsByNameSubstring(query);

    Homepage.open('/');
    Homepage.searchForProduct(query);
    expect(SearchResultsPage.getAllFoundProducts(expectedProducts.length))
      .toHaveTextContaining(query);
  });

  it('TA-37: Empty SERP is displayed when user submits invalid search query', () => {
    const query = chance.sentence();

    Homepage.open('/');
    Homepage.searchForProduct(query);
    expect(SearchResultsPage.emptyResultsContainer).toBeDisplayed();
  });

  it('TA-38.1: User should not be able to submit empty query', () => {
    Homepage.open('/');
    Homepage.searchForProduct('');
    expect(browser.url).not.toContain('search?q');
  });
});
