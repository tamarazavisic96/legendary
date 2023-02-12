/// <reference types="cypress" />

class HomePage {
  // VARIABLES

  brocolliAddToCartButton = ":nth-child(1) > .product-action > button";
  grapesAddToCartButton = ":nth-child(17) > .product-action > button";
  mangoAddToCartButton = ":nth-child(18) > .product-action > button";
  orangdeAddToCartButton = ":nth-child(20) > .product-action > button";
  cartButton = ".cart-icon";
  cartItem = "li.cart-item";
  proceedToCheckoutLabel = "PROCEED TO CHECKOUT";

  // GETTERS

  getGrapesAddTocartButton() {
    return cy.get(this.grapesAddToCartButton);
  }
  getMangoAddToCartButton() {
    return cy.get(this.mangoAddToCartButton);
  }
  getOrangeAddToCartButton() {
    return cy.get(this.orangdeAddToCartButton);
  }
  getCartIcon() {
    return cy.get(this.cartButton);
  }
  getCartItem() {
    return cy.get(this.cartItem);
  }
  getProceedToCheckoutButton() {
    return cy.get("button").contains(this.proceedToCheckoutLabel);
  }

  // ACTIONS

  addItemsToCart() {
    cy.MultiClick(this.brocolliAddToCartButton, 4);
    this.getGrapesAddTocartButton().click();
    this.getMangoAddToCartButton().click();
    this.getOrangeAddToCartButton().click();
    this.getCartIcon().click();
  }
  proceedToCheckout() {
    this.getProceedToCheckoutButton().click();
  }

  // ASSERTIONS

  verifyAddedItemsToCart() {
    this.addItemsToCart();
    this.getCartItem()
      .eq(0)
      .should("contain", "Brocolli - 1 Kg")
      .and("contain", "4");
    this.getCartItem()
      .eq(1)
      .should("contain", "Grapes - 1 Kg")
      .and("contain", "1");
    this.getCartItem()
      .eq(2)
      .should("contain", "Mango - 1 Kg")
      .and("contain", "1");
    this.getCartItem()
      .eq(3)
      .should("contain", "Orange - 1 Kg")
      .and("contain", "1");
  }
}

export default HomePage;
