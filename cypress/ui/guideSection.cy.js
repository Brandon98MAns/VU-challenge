describe('UI Testing - Guide Page', () => {
    it('Should load Guide page and validate subheadings', () => {
      cy.visit('/');
      cy.get('nav').contains('Guide').click();
      cy.url().should('include', '/guide');
      cy.get('h1').should('contain', 'Guide');
      cy.get('h2').should('contain', 'Getting a resource');
      cy.get('h2').should('contain', 'Listing all resources');
      // ... Validar otros subtítulos
    });
  });
  