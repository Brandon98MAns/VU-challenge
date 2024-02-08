// Importamos las funciones de Cypress
import { it, describe, beforeEach } from 'cypress';

// Leemos nuestra data en archivo JSON para no instertar data en nuestro script. de este modo el codigo lo podemos utlizar para multiples
//versiones de data cargando los archivos en carpeta fixtures.
cy.fixture('albums.json').then((albums) => {

  describe('Obtener un solo album', () => {
    let album;
    //bloque a ejecutar antes y para todas mis pruebas.
    beforeEach(() => {
      // Seleccionar un album aleatorio
      album = Cypress._.sample(albums);
    });

    it('Debe obtener un album individual correctamente', () => {
      cy.request("https://jsonplaceholder.typicode.com/albums/${album.id}")
        .then((response) => {
          expect(response.status).to.equal(200);
        });
    });

    it('Debe coincidir el título del album', () => {
      cy.request("https://jsonplaceholder.typicode.com/albums/${album.id}")
        .its('body')
        .should('deep.eq', album);
    });
  });

  describe('Obtener todos los albums', () => {
    it('Debe obtener todos los albums correctamente', () => {
      cy.request('https://jsonplaceholder.typicode.com/albums')
        .then((response) => {
          expect(response.status).to.equal(200);
        });
    });

    it('Debe obtener al menos un album', () => {
      cy.request('https://jsonplaceholder.typicode.com/albums')
        .its('body')
        .should('have.length.greaterThan', 0);
    });
  });
});