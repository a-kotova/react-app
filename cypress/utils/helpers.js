import Chance from 'Chance';

const chance = new Chance();

export function pickRandomProduct(listOfProducts) {
  const selectedCategory = chance.pickone(listOfProducts.collections);
  const selectedItem = chance.pickone(selectedCategory.items);
  selectedItem.linkUrl = selectedCategory.linkUrl;
  return selectedItem;
}
