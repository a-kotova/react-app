
export function pickRandomProducts(allProducts, quantity = 1) {
  return Cypress._.sampleSize(allProducts, quantity);
}

export function pickTargetProducts(productsList, preview = false) {
  const products = [];
  let items;
  productsList.collections.forEach((collection) => {
    if (preview) {
      items = Cypress._.take(collection.items, 4);
    } else {
      items = collection.items;
    }
    items.forEach((item) => {
      const product = item;
      product.linkUrl = collection.linkUrl;
      products.push(product);
    });
  });
  return products;
}
