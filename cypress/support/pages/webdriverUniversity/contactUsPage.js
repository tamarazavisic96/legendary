/// <reference types="cypress" />

class ContactUsPage {
  // VARIABLES

  commentBox = "textarea.feedback-input";
  alertMessage = "Well done you clicked on the link!";

  // GETTERS

  getCommentBox() {
    return cy.get(this.commentBox);
  }

  // ACTIONS

  visitUrl() {
    cy.visit(Cypress.env("contactUsUrl"));
  }
  insertCommentIntoCommentBox() {
    this.getCommentBox().type(this.alertMessage);
  }

  // ASSERTIONS

  verifyUserIsRedirectedToContactUsPage() {
    this.visitUrl();
    cy.url().should("eq", Cypress.env("contactUsUrl"));
  }
}

export default ContactUsPage;
