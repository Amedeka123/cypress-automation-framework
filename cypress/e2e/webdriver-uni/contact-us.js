/// <reference types="Cypress" />
import HomePage_PO from "../../support/pageObjects/webdriver-uni/HomePage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";
describe("Test Contact Us form via webdriverUni", () => {
 // Cypress.config("defaultCommandTimeout",2000) timeout for a test suite
  const homePage = new HomePage_PO();
  const contactUsPage = new Contact_Us_PO();
  beforeEach(() => {
    homePage.visitHomePage();
    //cy.wait(3000)
    homePage.clickOn_ControlUs_Button();
    //cy.pause()

    cy.fixture("example").then((data) => {
      globalThis.data = data;
      // this.data = data;
    });
  });
  it("Should be able to submit successful submision via contact us form", () => {
    cy.document().should("have.a.property", "charset").and("eq", "UTF-8");
    contactUsPage.contactFormSubmission(
      Cypress.env("first_Name"),
      data.last_name,
      data.email,
      "I am learning cypress custom commands",
      "h1",
      "Thank You for your Message!"
    );
  });
  it("Should not be able to submit successful submision via contact us form as all fields are required", () => {
    contactUsPage.contactFormSubmission(
      Cypress.env("first_Name"),
      data.last_name,
      " ",
      "I am learning cypress custom commands",
      "body",
      "Error: Invalid email address"
    );
  });
});
