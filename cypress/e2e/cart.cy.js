describe('cart spec', () => {
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })
    it('add to cart successfuly one product', () => {
      
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').should('be.visible').and('be.enabled').click()
      cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('.shopping_cart_badge').invoke('text').then(nbProduct =>{
        expect(nbProduct).to.eq('1')
      })
    })
})