// Importamos las funciones de Cypress
import { it, describe, beforeEach } from 'cypress';

// Leemos nuestra data en archivo JSON para no instertar data en nuestro script. de este modo el codigo lo podemos utlizar para multiples
//versiones de data cargando los archivos en carpeta fixtures.
cy.fixture('comments.json').then((comments) => {

  describe('Obtener un solo comment', () => {
    let comment;
    //bloque a ejecutar antes y para todas mis pruebas.
    beforeEach(() => {
      // Seleccionar un comment aleatorio
      comment = Cypress._.sample(comments);
    });

    it('Debe obtener un comment individual correctamente', () => {
      cy.request("https://jsonplaceholder.typicode.com/comments/${comment.id}")
        .then((response) => {
          expect(response.status).to.equal(200);
        });
    });

    it('Debe coincidir el título del comment', () => {
      cy.request("https://jsonplaceholder.typicode.com/comments/${comment.id}")
        .its('body')
        .should('deep.eq', comment);
    });
  });

  describe('Obtener todos los comments', () => {
    it('Debe obtener todos los comments correctamente', () => {
      cy.request('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
          expect(response.status).to.equal(200);
        });
    });

    it('Debe obtener al menos un comment', () => {
      cy.request('https://jsonplaceholder.typicode.com/comments')
        .its('body')
        .should('have.length.greaterThan', 0);
    });
  });
});