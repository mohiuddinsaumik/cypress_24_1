///<reference types = "cypress"/>

it ("search something",()=>{
    cy.visit("https://www.saucedemo.com/")

    //cy.get('[data-test="username"]').type("locked_out_user")
    //cy.get('.error-message-container').type("secret_sauce")


    cy.wait(5000)

})