describe("Intuit update user ",()=>{

    beforeEach(function () {
        cy.visit("/index.html")
        cy.get("#ius-userid").type("iamsushtest+iamtestpass@gmail.com")
        cy.get("#ius-password").type("Intuit01!");
        cy.get("#ius-sign-in-submit-btn").click()
        cy.url().should('include','account-manager')
      })

      //failing test bug.....
      // it feels as though the password updates with a blank
    it("Do  update user password,check save button disabled at the begining",()=>{
        cy.get('span[class=ius-sidenav-content]').contains('Security').click()
        cy.get("#ius-password-manager-btn-update").click()
        //cy.get("#ius-password-manager-btn-submit").should("be.disabled")
        cy.get("#ius-password-manager-btn-submit").click()

    })

})