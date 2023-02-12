/// <reference types="cypress" />

import BasePage from "../support/pages/webdriverUniversity/basePage";
import HomePage from "../support/pages/webdriverUniversity/homePage";
import ActionsPage from "../support/pages/webdriverUniversity/actionsPage";
import ContactUsPage from "../support/pages/webdriverUniversity/contactUsPage";

const basePage = new BasePage();
const homePage = new HomePage();
const actionsPage = new ActionsPage();
const contactUsPage = new ContactUsPage();

describe("4Create interview assignment", () => {
  beforeEach(() => {
    basePage.visitUrl();
  });
  it("User should be landed on the home page", () => {
    basePage.verifyValidUrlIsVisited();
  });
  it("User should be able to navigate through website", () => {
    homePage.scrollDownToActionsandTakeAScreenshotAndClickOnActions();
    actionsPage.verifyUserIsRedirectedToActionsPage();
    actionsPage.goBackToPreviousTab();
    homePage.goBackToActionTab();
    actionsPage.verifyTabTitleContainsActions();
    actionsPage.dragAndDrop();
    actionsPage.verifyDragAndDropWasSuccessfull();
    actionsPage.verifyLinkOneIsNotVIsibleUntilHover();
    actionsPage.verifyAlertMessageIsDisplayed();
  });
  it("User should be able to leave a comment", () => {
    contactUsPage.verifyUserIsRedirectedToContactUsPage();
    contactUsPage.insertCommentIntoCommentBox();
  });
});
