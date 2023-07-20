/// <reference types="cypress" />

describe("Test File Upload via webdriveruni", () => {
  it.only("Upload a file....", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
    //cy.fixture('images_1.jpeg').as("upload-file")
    cy.get("#myFile").selectFile("/cypress/fixtures/images_1.jpeg", {
      force: true,
    });
    cy.get("#submit-button").click();
  });

  it("Upload No file...", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#submit-button").click();
  });
});
