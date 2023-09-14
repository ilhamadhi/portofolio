describe('Cart', () => {
    it('Add to Cart', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').clear()
        cy.get('#user-name').type('standard_user')

        cy.wait(500)

        cy.get('#password').clear()
        cy.get('#password').type('secret_sauce')

        cy.contains('Login').click()
        cy.wait(1000)
        
        //Menambahkan ke keranjang
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.wait(1000)
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('.shopping_cart_link').click()

        //Klik tombol Checkout
        cy.get('[data-test="checkout"]').click()

        //Input data diri
        cy.get('[data-test="firstName"]').type('ilham')
        cy.get('[data-test="lastName"]').type('adhi')
        cy.get('[data-test="postalCode"]').type('12345')
        cy.get('[data-test="continue"]').click()

        cy.get('[data-test="finish"]').click()
    })
})