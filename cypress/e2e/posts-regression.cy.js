//Este archivo corre todos los metodos para posts en una sola ejecucion. 
describe('Crear, Actualizar y Eliminar un post', () => {
    let postId;
  
    // Método POST para crear un nuevo post
    it('Agregar un nuevo post via metodo POST', () => {
      const newPost = {
        title: 'TITULO DEL POST',
        body: 'CONTENIDO DEL POST',
        userId: 1,
      };
  
      cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: newPost,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => {
        expect(response.status).to.eq(201); // Verificar que se haya creado el post exitosamente
        postId = response.body.id; // Guardar el ID del nuevo post
      });
    });
  
    // Método PUT para actualizar un post existente
    it('Actualizamos un post existente via Api', () => {
      const updatedPost = {
        id: postId,
        title: "POST UPDATED",
        body: "POST DESCRIPTION UPDATED",
        userId: 1,
      };
  
      cy.request({
        method: 'PUT',
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
        body: updatedPost,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => {
        expect(response.status).to.eq(200); // Verificar que se haya actualizado el post exitosamente
      });
    });
  
    // Método PATCH para actualizar parcialmente un post existente
    it('Actualizar parcialmente un post existente via Api', () => {
      const updatedFields = {
        title: 'PATCH UPDATED',
      };
  
      cy.request({
        method: 'PATCH',
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
        body: updatedFields,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => {
        expect(response.status).to.eq(200); // Verificar que se haya actualizado parcialmente el post exitosamente
      });
    });
  
    // Método DELETE para eliminar el post creado
    it('Eliminar un post existente via Api', () => {
      cy.request({
        method: 'DELETE',
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`
      }).then((response) => {
        expect(response.status).to.eq(200); // Verificar que se haya eliminado el post exitosamente
      }).catch((error) => {
        cy.log('Error deleting post:', error);
      });
    });
  
    // Método GET para verificar que el post fue eliminado correctamente
    it('Verificar que el post fue eliminado correctamente', () => {
      cy.request({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
        failOnStatusCode: false // Evitar que el test falle si el post ya fue eliminado
      }).then((response) => {
        expect(response.status).to.eq(404); // Verificar que el post ya no existe
      });
    });
  });
  