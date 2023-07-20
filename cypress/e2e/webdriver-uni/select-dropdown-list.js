/// <reference types="Cypress" />
describe("Interact with dropdown list via webdriveruni", () => {
  it("select a specfic value via dropdown list ", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ forcr: true });
    cy.get("#dropdowm-menu-1").select("c#");
    cy.get("#dropdowm-menu-2").select("testng").should("have.value","testng")
    cy.get("#dropdowm-menu-3").select("JQuery").contains("JQuery");
  });


});
