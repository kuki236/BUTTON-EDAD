/// <reference types="cypress" />
const URL = "http://127.0.0.1:8080"
describe('Test Button Edad', () => {
  before(() => {
    cy.viewport(1920, 1080)
    cy.visit(URL)
  });
  it('tests', () => {
    cy.get('#cantidad-integrantes').type('2')
    cy.get('#siguiente').click()
    cy.get('.edadIntegrante').eq(0).type('20')
    cy.get('.edadIntegrante').eq(1).type('10')
    cy.get('#calcular').click()
    cy.get('[name="promedioEdad"]').should('have.text','El promedio es: 15.00')
    cy.get('[name="mayorEdad"]').should('have.text','La mayor edad es: 20')
    cy.get('[name="menorEdad"]').should('have.text','La menor edad es: 10')
  })
})