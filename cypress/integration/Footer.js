
// <reference types="Cypress" />
describe('Footer-Test', function () {

  beforeEach(function () {
      //cy.fixture('${env}/email.json').as('email');  
  });

    it('SIGN-UP correct email address', function () {
      cy.visit("");
      cy.url().should('include','/landing/spacer');
      cy.scrollTo('bottom');
      cy.get('#email').click().type("soledadpavicich@gmail.com").type('{enter}');
    });

});