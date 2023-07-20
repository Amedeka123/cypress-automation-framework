/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
  before(() => {
    cy.fixture("userDetails").as("user");
  });
  it(
    "Should be able to submit successful submision via contact us form",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    () => {
      cy.visit("https://automationteststore.com/");
      cy.xpath("//a[text()='Contact Us']")
        .click()
        .then((contactUsText) => {
          cy.log(contactUsText.text());
        });
      cy.get("@user").then((user) => {
        cy.get("#ContactUsFrm_first_name").type(user.first_name);
        cy.get("#ContactUsFrm_email").type(user.email);
      });
      cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
      cy.get("#ContactUsFrm_enquiry").type(
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus doloremque eius illum adipisci at asperiores velit earum, est iusto ad consequuntur fugiat ducimus natus id sunt dolore! Nam, in impedit?"
      );
      cy.xpath('//button[@title="Submit"]').click();
      cy.get(".mb40 > :nth-child(3)").should(
        "have.text",
        "Your enquiry has been successfully sent to the store owner!"
      );
    }
  );
});
