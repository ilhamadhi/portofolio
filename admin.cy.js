describe('Admin', () => {
    it('Searching Admin', () => {
        cy.viewport(1366, 768)
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(3000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()

        cy.wait(3000)
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        cy.get(':nth-child(2) > .oxd-input').type('ganesh {enter}')
    })
})