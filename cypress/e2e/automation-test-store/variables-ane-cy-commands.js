/// <reference types="Cypress" />

describe("Verifying varaibles, cypress commands and jquery commands", () => {
  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/"); 
    // not recommended //
    //The following will fail
    // const makeUp = cy.get("a[href*='product/category&path=']").contains("Makeup");
    // const skinCare = cy.get("a[href*='product/category&path=']").contains("Skincare");
    // makeUp.click()
    // skinCare.click()
    // The following will pass
    // const makeUp = cy
    //     .get("a[href*='product/category&path=']")
    //     .contains("Makeup");
    //       makeUp.click();
    // const skinCare = cy
    //     .get("a[href*='product/category&path=']")
    //     .contains("Skincare");
    // skinCare.click();

    // Recommended Approach
    cy.get("a[href*='product/category&path=']").contains("Makeup").click()
    cy.get("a[href*='product/category&path=']").contains("Skincare").click()
  });
  it('Navigating to specific product pages', () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();

    //Following code will fail
    //const header = cy.get("h1 .mainText")
    // cy.log(header.text())
    // Recommended Approach
    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text();
      cy.log("Found header text; " + headerText);
      expect(headerText).is.eq("Makeup");
    });
  });
   it.only("validate the property of the contact Us page   ", () => {
     cy.visit("https://automationteststore.com/index.php?rt=content/contact");
    //Uses cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");

    //JQuery
    cy.contains("#ContactUsFrm", "Contact Us Form").then(text=>{
      const firstNameText = text.find("#field_11").text();
      expect(firstNameText).to.contain("First name");

      //Embedded commands (closure)

      cy.get("#field_11").then((fnText)=>{
        cy.log(fnText.text());
        cy.log(fnText);
      })
    })



    
     

   });
 
}); 
