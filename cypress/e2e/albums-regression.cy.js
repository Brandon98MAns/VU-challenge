//Este archivo corre todos los metodos para albums en una sola ejecucion. 
describe('Crear, Actualizar y Eliminar un album', () => {
    let albumId;
  
    // Método album para crear un nuevo album
    it('Agregar un nuevo album via metodo album', () => {
      const newalbum = {
        title: 'TITULO DEL album',
        body: 'CONTENIDO DEL album',
        userId: 1,
      };
  
      cy.request({
        method: 'album',
        url: 'https://jsonplaceholder.typicode.com/albums',
        body: newalbum,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => {
        expect(response.status).to.eq(201); // Verificar que se haya creado el album exitosamente
        albumId = response.body.id; // Guardar el ID del nuevo album
      });
    });
  
    // Método PUT para actualizar un album existente
    it('Actualizamos un album existente via Api', () => {
      const updatedalbum = {
        id: albumId,
        title: "album UPDATED",
        body: "album DESCRIPTION UPDATED",
        userId: 1,
      };
  
      cy.request({
        method: 'PUT',
        url: `https://jsonplaceholder.typicode.com/albums/${albumId}`,
        body: updatedalbum,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => {
        expect(response.status).to.eq(200); // Verificar que se haya actualizado el album exitosamente
      });
    });
  
    // Método PATCH para actualizar parcialmente un album existente
    it('Actualizar parcialmente un album existente via Api', () => {
      const updatedFields = {
        title: 'PATCH UPDATED',
      };
  
      cy.request({
        method: 'PATCH',
        url: `https://jsonplaceholder.typicode.com/albums/${albumId}`,
        body: updatedFields,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => {
        expect(response.status).to.eq(200); // Verificar que se haya actualizado parcialmente el album exitosamente
      });
    });
  
    // Método DELETE para eliminar el album creado
    it('Eliminar un album existente via Api', () => {
      cy.request({
        method: 'DELETE',
        url: `https://jsonplaceholder.typicode.com/albums/${albumId}`
      }).then((response) => {
        expect(response.status).to.eq(200); // Verificar que se haya eliminado el album exitosamente
      }).catch((error) => {
        cy.log('Error deleting album:', error);
      });
    });
  
    // Método GET para verificar que el album fue eliminado correctamente
    it('Verificar que el album fue eliminado correctamente', () => {
      cy.request({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/albums/${albumId}`,
        failOnStatusCode: false // Evitar que el test falle si el album ya fue eliminado
      }).then((response) => {
        expect(response.status).to.eq(404); // Verificar que el album ya no existe
      });
    });
  });
  