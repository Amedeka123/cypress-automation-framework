/// <reference types="Cypress" />
describe("Verify radio buttons via webdriveruni", () => {
  before(() => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ forcr: true });
  });
  it("Check specfic   radioButton", () => {
    cy.get("#radio-buttons").find("[type='radio']").first().check();
    cy.get("#radio-buttons").find("[type='radio']").eq(2).check();

    //radio-buttons-selected-disabled
  });

  it("Validate radio buttons", () => {
    cy.get("#radio-buttons-selected-disabled")
      .find("[value='lettuce']")
      .check()
      .should("be.checked");
    cy.get("#radio-buttons-selected-disabled")
      .find("[value='pumpkin']")
      .should("not.be.checked");
    cy.get("#radio-buttons-selected-disabled")
      .find("[value='cabbage']")
      .should("be.disabled");
  });
});
