/// <reference types="Cypress" />

describe("Inspect Automation Test Store items  using chain of cammands", () => {
  it.only("Click on the first item using text", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click().then((itemHeaderText)=>{
        cy.log("Selected the following item: "+itemHeaderText.text())
    })
  });
it("Click on the first item using index", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0);
});
});
