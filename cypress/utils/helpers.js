const { _ } = Cypress;

export function pickTargetCategory(productsList) {
  return _.sample(productsList.collections);
}

export function pickTargetProducts(category, quantity = 1, isShopPage = false) {
  const items = isShopPage
    ? _.take(Cypress._.values(category.items), 4)
    : _.values(category.items);
  return _.sampleSize(items, quantity);
}
