import Chance from 'Chance';
import BasePage from './basePage';

const chance = new Chance();

class ShopPage extends BasePage {
  selectCategory(allCategories) {
    return chance.pickone(allCategories.collections);
  }

  pickRandomProduct(listOfProducts) {
    const selectedCategory = this.selectCategory(listOfProducts);
    const selectedItem = chance.pickone(selectedCategory.items);
    selectedItem.linkUrl = selectedCategory.linkUrl;
    return selectedItem;
  }

  navigateToCategory(pickedItem) {
    this.open(pickedItem.linkUrl);
  }

  addProductToCart(pickedItem, quantity = 1) {
    cy.get(`div[name="${pickedItem.name}"]`).parent().find('button').invoke('show')
      .contains('Add to Cart')
      .then((CTA) => {
        for (let i = 0; i < quantity; i++) {
          cy.wrap(CTA).click();
        }
      });
  }
}

export default new ShopPage();
