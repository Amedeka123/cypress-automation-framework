/// <reference types="Cypress" />
describe("Verify autocomplete dropdown list via webdriveruni", () => {
  it("select a specfic fruit via autocomplete dropdown list ", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ forcr: true });
    cy.get("#myInput").type("A");
    cy.get("#myInputautocomplete-list > *").as("fruitList");

    cy.get("@fruitList")
      .each(($el, index, $list) => {
        const prod = $el.text();
        const productToSelect = "Apple";

        if (prod === productToSelect) {
          $el.trigger("click");

          cy.get("#submit-button").click();
          cy.url().should("include", productToSelect);
        }
      })
      .then(() => {
        cy.get("#myInput").type("G");
        cy.get("#myInputautocomplete-list > *").as("fruitList");

        cy.get("@fruitList").each(($el, index, $list) => {
          const prod = $el.text();
          const productToSelect = "Grapes";

          if (prod === productToSelect) {
            $el.trigger("click");

            cy.get("#submit-button").click();
            cy.url().should("include", productToSelect);
          }
        });
      });
  });
});
