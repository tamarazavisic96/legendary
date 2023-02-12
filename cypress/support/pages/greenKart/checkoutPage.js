/// <reference types="cypress" />

class CheckoutPage {
  // VARIABLES

  totalAmountField = ".totAmt";
  promoCodeField = ".promoCode";
  applyButton = ".promoBtn";
  invalidCodeErrorMessageContainer = ".promoInfo";
  invalidCodeErrorMessage = "Invalid code ..!";
  placeOrderLabel = "Place Order";
  agreeCheckbox = ".chkAgree";
  proceedButtonLabel = "Proceed";
  termsErrorMessageContainer = ".errorAlert";
  termsErrorMessage = "Please accept Terms & Conditions - Required";
  confirmationMessage = "Thank you, your order has been placed successfully";

  // GETTERS

  getApplyButton() {
    return cy.get(this.applyButton);
  }
  getInvalidCodeErrorMessageContainer() {
    return cy.get(this.invalidCodeErrorMessageContainer);
  }
  getPlaceOrderButton() {
    return cy.contains(this.placeOrderLabel);
  }
  getSelectCountryDropdownMenu() {
    return cy.get("select");
  }
  getAgreeCheckbox() {
    return cy.get(this.agreeCheckbox);
  }
  getTermsErrorMessageContainer() {
    return cy.get(this.termsErrorMessageContainer);
  }
  getProceedButton() {
    return cy.contains(this.proceedButtonLabel);
  }
  getConfirmationMessage() {
    return cy.contains(this.confirmationMessage);
  }

  // ACTIONS

  enterPromoCodeIntoPromoCodeField() {
    cy.get(this.totalAmountField)
      .invoke("text")
      .then((text) => {
        cy.get(this.promoCodeField).type(text);
      });
  }
  clickOnApplyButton() {
    this.getApplyButton().click();
    cy.wait(4000);
  }
  clickOnPlaceOrderButton() {
    this.getPlaceOrderButton().click();
  }
  chooseCountry(country) {
    this.getSelectCountryDropdownMenu().select(country);
  }
  checkAgreeCheckbox() {
    this.getAgreeCheckbox().check();
  }
  clickOnProceedButton() {
    this.getProceedButton().click();
  }

  // ASSERTIONS

  verifyInvalidCodeErrorMessageIsDisplayed() {
    this.enterPromoCodeIntoPromoCodeField();
    this.clickOnApplyButton();
    this.getInvalidCodeErrorMessageContainer()
      .should("be.visible")
      .and("have.text", this.invalidCodeErrorMessage);
  }
  verifyTermsErrorMessageIsDisplayed(country) {
    this.chooseCountry(country);
    this.clickOnProceedButton();
    this.getTermsErrorMessageContainer().invoke("text").as("termsErrorMessage");
    cy.get("@termsErrorMessage").should("eq", this.termsErrorMessage);
  }
  verifyOrderIsPlacedSuccessfully() {
    this.checkAgreeCheckbox();
    this.clickOnProceedButton();
    this.getConfirmationMessage().should("be.visible");
  }
}

export default CheckoutPage;
