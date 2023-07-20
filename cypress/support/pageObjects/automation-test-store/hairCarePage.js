class HairCarepage {
 addHairCareProductsToBasket(){
     data.productNames.forEach((element) => {
       cy.addProductToBasket(element).then(()=>{
       // debugger
       })
     });
     cy.get(".dropdown-toggle > .fa").click()//.debug()
 }
}

export default HairCarepage