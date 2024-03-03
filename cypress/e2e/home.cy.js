describe('Home spec', () => {
  it('home page', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').should('be.visible')
    cy.get('[data-test="login-button"]').should('be.visible').and('be.enabled')
    cy.get('.login_credentials_wrap').should('be.visible')
  })
})