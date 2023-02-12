/// <reference types="cypress" />

class HomePage {
  // VARIABLES

  actionsButtonLabel = "ACTIONS";

  // GETTERS

  // ACTIONS

  scrollDownToActionsandTakeAScreenshotAndClickOnActions() {
    cy.get("h1")
      .contains(this.actionsButtonLabel)
      .scrollIntoView()
      .screenshot()
      .click();
  }
  goBackToActionTab() {
    cy.visit(Cypress.env("actionsUrl"));
  }

  // ASSERTIONS
}

export default HomePage;
