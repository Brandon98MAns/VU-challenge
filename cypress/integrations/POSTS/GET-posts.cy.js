// Importamos las funciones de Cypress
import { it, describe, beforeEach } from 'cypress';

// Leemos nuestra data en archivo JSON para no instertar data en nuestro script. de este modo el codigo lo podemos utlizar para multiples
//versiones de data cargando los archivos en carpeta fixtures.
cy.fixture('posts.json').then((posts) => {

  describe('Obtener un solo post', () => {
    let post;
    //bloque a ejecutar antes y para todas mis pruebas.
    beforeEach(() => {
      // Seleccionar un post aleatorio
      post = Cypress._.sample(posts);
    });

    it('Debe obtener un post individual correctamente', () => {
      cy.request("https://jsonplaceholder.typicode.com/posts/${post.id}")
        .then((response) => {
          expect(response.status).to.equal(200);
        });
    });

    it('Debe coincidir el título del post', () => {
      cy.request("https://jsonplaceholder.typicode.com/posts/${post.id}")
        .its('body')
        .should('deep.eq', post);
    });
  });

  describe('Obtener todos los posts', () => {
    it('Debe obtener todos los posts correctamente', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          expect(response.status).to.equal(200);
        });
    });

    it('Debe obtener al menos un post', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts')
        .its('body')
        .should('have.length.greaterThan', 0);
    });
  });
});