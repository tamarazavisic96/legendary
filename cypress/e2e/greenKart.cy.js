/// <reference types="cypress" />

var country = "Serbia";

import BasePage from "../support/pages/greenKart/basePage";
import HomePage from "../support/pages/greenKart/homePage";
import CheckoutPage from "../support/pages/greenKart/checkoutPage";

const basePage = new BasePage();
const homePage = new HomePage();
const checkoutPage = new CheckoutPage();

describe("4Create interview assignment", () => {
  beforeEach(() => {
    basePage.visitUrl();
  });

  it("User should be landed on the home page", () => {
    basePage.verifyValidUrlIsVisited();
  });

  it("User should be able to place order", () => {
    homePage.verifyAddedItemsToCart();
    homePage.proceedToCheckout();
    checkoutPage.verifyInvalidCodeErrorMessageIsDisplayed();
    checkoutPage.clickOnPlaceOrderButton();
    checkoutPage.verifyTermsErrorMessageIsDisplayed(country);
    checkoutPage.verifyOrderIsPlacedSuccessfully();
  });
});
