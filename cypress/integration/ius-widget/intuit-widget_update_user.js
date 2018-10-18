describe("Intuit update user ",()=>{

    beforeEach(function () {
        cy.visit("/index.html")
        cy.get("#ius-userid").type("iamsushtest+iamtestpass@gmail.com")
        cy.get("#ius-password").type("Intuit01!");
        cy.get("#ius-sign-in-submit-btn").click()
        cy.url().should('include','account-manager')
      })

    it("Do  update user phone number",()=>{
        cy.get('span[class=ius-sidenav-content]').contains('Security').click()

    })

})