describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('.col-span-6').click()
    cy.get('.h-12')
      .contains('adicionar ao carrinho', { matchCase: false })
      .click()
    cy.url().should('include', '/product/moletom-never-stop-learning')
    cy.get('.gap-4 > div.flex > .text-sm').contains('cart 1')
  })
})
