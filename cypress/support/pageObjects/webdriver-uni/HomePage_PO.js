class HomePage_PO {
  visitHomePage() {
    cy.visit(Cypress.env("webdriveruni_homePage"));
  }
  clickOn_ControlUs_Button() {
    cy.get("#contact-us").invoke("removeAttr", "target").click({ forcr: true },{timeout:8000});
  }
}

export default HomePage_PO;
