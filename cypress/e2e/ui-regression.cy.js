//Este archivo ejecuta las pruebas de UI, en este caso solo tenemos un flujo entonces es el mismo. Se agregarian futuros flujos si se necesitara debajo del existente.
describe('UI Testing - Guide Page', () => {
    it('Should load Guide page and validate subheadings', () => {
      cy.visit('https://jsonplaceholder.typicode.com/');
      cy.get(':nth-child(1) > .mr-4').contains('Guide').click();
      cy.url().should('include', '/guide/');
      cy.get('h2').should('contain', 'Guide');
      cy.get('.container > :nth-child(5)').should('contain', 'Getting a resource');
      cy.get('.container > :nth-child(9)').should('contain', 'Listing all resources');
      cy.get('.container > :nth-child(13)').should('contain', 'Creating a resource');
      cy.get('.container > :nth-child(18)').should('contain', 'Updating a resource');
      cy.get('.container > :nth-child(23)').should('contain', 'Patching a resource');
      cy.get('.container > :nth-child(28)').should('contain', 'Deleting a resource');
      cy.get('.container > :nth-child(31)').should('contain', 'Filtering resources');
      cy.get('.container > :nth-child(34)').should('contain', 'Listing nested resources');
    });
  });
  