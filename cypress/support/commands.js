// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginToTrello',()=>{
    cy.visit("/login");
    cy.get("#user").type("raghadqa219@gmail.com");
    cy.get("#login").click();
    cy.origin("https://id.atlassian.com",()=>{
      cy.get("#password").type("12345678raghad" +"{enter}")
    })
  })
  
  Cypress.Commands.add('findByTestId',(testId)=>{
      cy.get(`[data-testid=${testId}]`)
  })