class BasePage {
  // ACTIONS

  visitUrl() {
    cy.visit(Cypress.env("baseUrl"));
  }

  // ASSERTIONS

  verifyValidUrlIsVisited() {
    this.visitUrl();
    cy.url().should("eq", Cypress.env("baseUrl"));
  }
}

export default BasePage;
