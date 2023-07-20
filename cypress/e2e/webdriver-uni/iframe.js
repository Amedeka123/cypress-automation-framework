/// <reference types="Cypress" />
describe("Handling Iframe", () => {
  it("Handle webdriveruni iframe and model", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#iframe").invoke("removeAttr", "target").click({ forcr: true });

    cy.get("#frame").then(($iframe)=>{
        const body = $iframe.contents().find("body");
        cy.wrap(body).as("iframe")
    })

    cy.get("@iframe").find("#button-find-out-more").click()
    cy.get("@iframe")
      .find("#myModal").as("modal")
    cy.get("@modal").should(($modalText)=>{
        const text = $modalText.text();
        expect(text).to.include("Welcome to webdriveruniversity.com");
    });
    cy.get("@modal").contains("Close").click() 
  });
 
});
