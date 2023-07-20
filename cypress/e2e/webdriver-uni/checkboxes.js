/// <reference types="Cypress" />
describe("Verify checkboxes via webdriveruni", () => {
  beforeEach(() => {
    cy.navigateTo_webdriveruni_HomePage();
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ forcr: true });
  });
  it("check and validate checkbox", () => {
    //cy.get("#checkboxes > :nth-child(1) > input").check()
    // cy.get("#checkboxes > :nth-child(3) > input").should("not.be.checked")
    // cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked")
    cy.get('input[value="option-1"]').as("option-1");
    //cy.get("@option-1").check()
    cy.get("@option-1").check().should("be.checked");
  });
  it("uncheck and validate checkbox", () => {
    cy.get('input[value="option-3"]').as("option-3");
    cy.get("@option-3").uncheck().should("not.be.checked");
  });
  it.only("check and validate multiple checkboxes", () => {
    cy.get("input[type='checkbox']")
      .check(["option-1", "option-3"])
      .should("be.checked");
  });
});
