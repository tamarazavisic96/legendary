class BasePage {
  // ACTIONS

  visitUrl() {
    cy.visit(Cypress.env("baseUrl2"));
  }

  // ASSERTIONS

  verifyValidUrlIsVisited() {
    this.visitUrl();
    cy.url().should("eq", Cypress.env("baseUrl2"));
  }
}

export default BasePage;
