describe('Actualizar un post existente', () => {
  it('Actualizamos un post existente via Api', () => {
    //Definimos propiedades
    const updatedPost = {
      id: 1,
      title: "POST UPDATED",
      body: "POST DESCRIPTION UPDATED",
      userId: 1,
    };
    //Solicitud
    cy.request({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      body: updatedPost,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      failOnStatusCode: false, // Evita que Cypress falle en caso de un código de estado no exitoso
    }).then((response) => {
      if (response.status === 404) {
        // Si el post no existe, mostrar un mensaje de error descriptivo
        cy.log('El post no existe. No se puede actualizar.');
      } else {
        // Si la solicitud fue exitosa, verificar los datos del post actualizado
        expect(response.status).to.eq(200); // Verificar que el status de la respuesta sea 200 (OK)
        expect(response.body).to.have.property('title', updatedPost.title); // Verificar que el título del post actualizado coincida
        expect(response.body).to.have.property('body', updatedPost.body); // Verificar que el cuerpo del post actualizado coincida
        expect(response.body).to.have.property('userId', updatedPost.userId); // Verificar que el userId del post actualizado coincida
      }
    });
  });
});
