describe("Intuit update user full name where full name already present",()=>{

    beforeEach(function () {
        cy.visit("/index.html")
        cy.get("#ius-userid").type("iamsushtest+iamtestpass@gmail.com")
        cy.get("#ius-password").type("Intuit01!");
        cy.get("#ius-sign-in-submit-btn").click()
        cy.url().should('include','account-manager')
        cy.get("#ius-fullname-manager-btn-update").click()
        cy.get("#ius-first-name").clear()
        cy.get("#ius-last-name").clear()
      })
    
    
      it("Do update your first and last name",()=>{
        cy.get("#ius-first-name").type("sushrut")
        cy.get("#ius-last-name").type("testpass")
        cy.get("#ius-fullname-manager-btn-submit").should("be.enabled").click()
    })

    it("Do update cannot update only first name",()=>{
        cy.get("#ius-first-name").type("Sushrut")
        //should still be disabled
        cy.get("#ius-fullname-manager-btn-submit").should("be.disabled")
    })
    })
