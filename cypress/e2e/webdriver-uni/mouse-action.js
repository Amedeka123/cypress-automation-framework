/// <reference types="Cypress" />
describe("Test mouse actions via webdriveruni", () => {
  it("Scroll element into view", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ forcr: true });
  });

  it("I should be able to drag and drop a draggble item", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ forcr: true });
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });
  it("I should be able to perform double mouse click", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ forcr: true });
    cy.get("#double-click").dblclick();
  });

  it("I should be able hold down the left mouse click button on a given item", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ forcr: true });
    cy.get("#click-box").trigger("mousedown",{which:1}).then(($element)=>{
        expect($element).to.have.css("background-color", "rgb(0, 255, 0)");
    })
  });
});
