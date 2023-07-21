/// <reference types="Cypress" />
import AutoStoreHomePage from "../../support/pageObjects/automation-test-store/autoStoreHomePage";
import HairCarepage from "../../support/pageObjects/automation-test-store/hairCarePage";
describe("Add multiple items to the basket", () => {
  const autoStoreHomePage = new AutoStoreHomePage()
  const hairCarePage = new HairCarepage()
  before(() => {
    cy.fixture("products").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
    autoStoreHomePage.navigateToAutoStoreHomePage()
    autoStoreHomePage.clickOnHairCareLink()
  });
  it("Add specfic items to basket", () => {
    hairCarePage.addHairCareProductsToBasket()
    // data.productNames.forEach(element => {
    //     cy.addProductToBasket(element)
    // });
    // cy.get(".dropdown-toggle > .fa").click()
  });
});
