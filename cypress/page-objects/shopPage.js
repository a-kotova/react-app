import BasePage from './basePage';
import Chance from 'Chance';

const chance = new Chance();

class ShopPage extends BasePage {
  selectCategory(allCategories) {
    return chance.pickone(allCategories.collections);
  }

  selectProduct(selectedCategory) {
    const selectedItem = chance.pickone(selectedCategory.items);
    selectedItem.linkUrl = selectedCategory.linkUrl;
    return selectedItem;
  }

  pickAnyProduct(listOfProducts) {
    const selectedCategory = this.selectCategory(listOfProducts);
    const pickedProduct = this.selectProduct(selectedCategory);
    return pickedProduct;
  }

  addProductToCart(pickedItem, quantity = 1) {
    this.open(pickedItem.linkUrl);
    cy.get(`div[name="${pickedItem.name}"]`).parent().find('button').invoke('show')
      .contains('Add to Cart')
      .then(($CTA) => {
        for (let i = 0; i < quantity; i++) {
          cy.wrap($CTA).click();
        }
      });
  }
}

export default new ShopPage();
