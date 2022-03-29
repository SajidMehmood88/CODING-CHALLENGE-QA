/// <reference types="Cypress" />


describe('My First Test Suite', function()
{

it('My FirstTest cas', function(){
    cy.visit(Cypress.env('url'))

 cy.wait(4000)
})
})