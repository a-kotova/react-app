export function pickTargetCategory(productsList) {
  return Cypress._.sample(productsList.collections);
}

export function pickTargetProducts(category, quantity = 1, isShopPage = false) {
  const items = isShopPage
    ? Cypress._.take(Cypress._.values(category.items), 4)
    : Cypress._.values(category.items);
  return Cypress._.sampleSize(items, quantity);
}
