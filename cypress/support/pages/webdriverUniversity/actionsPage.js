/// <reference types="cypress" />

import "@4tw/cypress-drag-drop";
import "cypress-real-events/support";

class ActionsPage {
  // VARIABLES

  actionsTabHeader = "#nav-title";
  linkOne = "#div-hover > div.dropdown.hover > div > a";
  hoverableButton = ".dropbtn";
  droppableFieldAfterDrop = "#droppable > p > b";

  // GETTERS

  getActionsTabHeader() {
    return cy.get(this.actionsTabHeader);
  }
  getDroppableFieldAfterDrop() {
    return cy.get(this.droppableFieldAfterDrop);
  }
  getLinkOne() {
    return cy.get(this.linkOne);
  }
  getHoverableButton() {
    return cy.get(this.hoverableButton).first();
  }

  // ACTIONS

  goBackToPreviousTab() {
    cy.go("back").screenshot();
  }
  dragAndDrop() {
    cy.get("#draggable").drag("#droppable", { force: true });
  }
  showAndClickOnLink() {
    this.getHoverableButton()
      .realHover()
      .then(() => {
        this.getLinkOne().click({ force: true });
      });
  }

  // ASSERTIONS

  verifyUserIsRedirectedToActionsPage() {
    cy.url().should("not.eq", Cypress.env("actionsUrl"));
  }
  verifyTabTitleContainsActions() {
    this.getActionsTabHeader().should("contain", "Actions");
  }
  verifyDragAndDropWasSuccessfull() {
    this.getDroppableFieldAfterDrop().should("contain", "Dropped!");
  }
  verifyLinkOneIsNotVIsibleUntilHover() {
    this.getLinkOne().should("not.be.visible");
    this.showAndClickOnLink();
  }
  verifyAlertMessageIsDisplayed() {
    const alertShown = cy.stub().as("alertShown");
    cy.on("window:alert", alertShown);
    cy.get("@alertShown").should(
      "have.been.calledOnceWith",
      "Well done you clicked on the link!"
    );
  }
}

export default ActionsPage;
