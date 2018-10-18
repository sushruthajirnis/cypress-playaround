describe("My second cypress test",()=>{


    it("Navigate to Account Recovery page",()=>{
        cy.visit("/index.html")
        cy.get("#ius-link-account-recovery").click()
        cy.url().should("include","account-recovery")
    })
})