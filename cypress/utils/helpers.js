
export function pickRandomProducts(allProducts, quantity = 1) {
  return Cypress._.sampleSize(allProducts, quantity);
}

export function pickTargetProducts(productsList, preview = false) {
  return productsList.collections.map((collection) => {
    const items = preview ? Cypress._.take(collection.items, 4) : collection.items;
    return items.map((item) => {
      item.linkUrl = collection.linkUrl;
      return item;
    });
  }).flat();
}
