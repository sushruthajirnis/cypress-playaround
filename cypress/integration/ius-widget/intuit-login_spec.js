describe("My first cypress test",()=>{

    it("Navigate to intuit login widget and click login ",()=>{
        cy.visit("/index.html")
        cy.get("#ius-userid").type("iamsushtest+iamtestpass@gmail.com")
        cy.get("#ius-password").type("Intuit01!");
        cy.get("#ius-sign-in-submit-btn").click()
        cy.url().should('include','account-manager')
    })

})