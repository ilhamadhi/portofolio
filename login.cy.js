describe('Test 1', () => {
    it('Login and Logout', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').clear()
        cy.get('#user-name').type('standard_user')

        cy.wait(500)

        cy.get('#password').clear()
        cy.get('#password').type('secret_sauce')

        cy.contains('Login').click()
        cy.wait(2000)

        cy.get('button#react-burger-menu-btn').click()
        cy.wait(1000)

        cy.get('a#logout_sidebar_link').click()
    })
})