describe("Alias and Invoke Test", () => {
  it.only("Valite a specfic hair care product", () => {
    cy.visit("https://automationteststore.com/");
    // Verify the full login page loaded correctly.
    // cy.eyesCheckWindow({
    //   tag: "Login page",
    //   target: "window",
    //   fully: true,
    // });
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });
  it("Validate the number of product on the home page", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productSize");
    cy.get("@productSize").its("length").should("eq", 16);
    cy.get("@productSize")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it("Calculate total normal and  sale products  ", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productSize");
    // cy.get("@productSize")
    //   .find(".oneprice")
    //   .each(($el, index, $list) => {
    //     cy.log($el.text());
    //   });
    cy.get(".thumbnail")
      .find(".oneprice")
      .invoke("text")
      .as("nonSaleItemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItemPrice");
    let itemsTotal = 0;
    cy.get("@nonSaleItemPrice").then(($linkText) => {
      let itemPriceTotal = 0;
      let itemPrice = $linkText.split("$");
      for (let i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemPriceTotal += Number(itemPrice[i]);
      }
      itemsTotal += itemPriceTotal;
      cy.log("Non sale price total is: " + itemPriceTotal);
    });

    cy.get("@saleItemPrice")
      .then(($linkText) => {
        let saleItemPriceTotal = 0;
        let saleItemPrice = $linkText.split("$");
        for (let i = 0; i < saleItemPrice.length; i++) {
          cy.log(saleItemPrice[i]);
          saleItemPriceTotal += Number(saleItemPrice[i]);
        }
        itemsTotal += saleItemPriceTotal;
        cy.log(" sale price total is: " + saleItemPriceTotal);
      })
      .then(() => {
        cy.log("The total price of all products: " + itemsTotal);
        expect(itemsTotal).to.equal(660.5);
      });
  });
});
