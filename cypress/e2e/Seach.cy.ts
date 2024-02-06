describe('Search', () => {
  it('should render the search page', () => {
    cy.visit('http://localhost:3000')
    cy.get('input').type('moletom')
    cy.get('.justify-between > .gap-5 > .flex').submit()
    cy.url().should('include', '/search?q=moletom')
    cy.get('[href="/product/moletom-never-stop-learning"]').click()
    cy.url().should('include', '/product/moletom-never-stop-learning')
  })
})
