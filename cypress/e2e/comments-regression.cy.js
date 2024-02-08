//Este archivo corre todos los metodos para comments en una sola ejecucion. 
describe('Crear, Actualizar y Eliminar un comment', () => {
    let commentId;
  
    // Método comment para crear un nuevo comment
    it('Agregar un nuevo comment via metodo comment', () => {
      const newcomment = {
        title: 'TITULO DEL comment',
        body: 'CONTENIDO DEL comment',
        userId: 1,
      };
  
      cy.request({
        method: 'comment',
        url: 'https://jsonplaceholder.typicode.com/comments',
        body: newcomment,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => {
        expect(response.status).to.eq(201); // Verificar que se haya creado el comment exitosamente
        commentId = response.body.id; // Guardar el ID del nuevo comment
      });
    });
  
    // Método PUT para actualizar un comment existente
    it('Actualizamos un comment existente via Api', () => {
      const updatedcomment = {
        id: commentId,
        title: "comment UPDATED",
        body: "comment DESCRIPTION UPDATED",
        userId: 1,
      };
  
      cy.request({
        method: 'PUT',
        url: `https://jsonplaceholder.typicode.com/comments/${commentId}`,
        body: updatedcomment,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => {
        expect(response.status).to.eq(200); // Verificar que se haya actualizado el comment exitosamente
      });
    });
  
    // Método PATCH para actualizar parcialmente un comment existente
    it('Actualizar parcialmente un comment existente via Api', () => {
      const updatedFields = {
        title: 'PATCH UPDATED',
      };
  
      cy.request({
        method: 'PATCH',
        url: `https://jsonplaceholder.typicode.com/comments/${commentId}`,
        body: updatedFields,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => {
        expect(response.status).to.eq(200); // Verificar que se haya actualizado parcialmente el comment exitosamente
      });
    });
  
    // Método DELETE para eliminar el comment creado
    it('Eliminar un comment existente via Api', () => {
      cy.request({
        method: 'DELETE',
        url: `https://jsonplaceholder.typicode.com/comments/${commentId}`
      }).then((response) => {
        expect(response.status).to.eq(200); // Verificar que se haya eliminado el comment exitosamente
      }).catch((error) => {
        cy.log('Error deleting comment:', error);
      });
    });
  
    // Método GET para verificar que el comment fue eliminado correctamente
    it('Verificar que el comment fue eliminado correctamente', () => {
      cy.request({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/comments/${commentId}`,
        failOnStatusCode: false // Evitar que el test falle si el comment ya fue eliminado
      }).then((response) => {
        expect(response.status).to.eq(404); // Verificar que el comment ya no existe
      });
    });
  });
  