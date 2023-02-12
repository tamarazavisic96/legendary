Cypress.Commands.add("MultiClick", (element, times) => {
  for (let n = 0; n < times; n++) {
    cy.get(element).click({ force: true });
  }
});

Cypress.Commands.add("hover", (selector) => {
  cy.get(selector).rightclick();
});
