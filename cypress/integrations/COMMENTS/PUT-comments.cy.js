describe('Actualizar un comment existente', () => {
  it('Actualizamos un comment existente via Api', () => {
    //Definimos propiedades
    const updatedcomment = {
      id: 1,
      title: "comment UPDATED",
      body: "comment DESCRIPTION UPDATED",
      userId: 1,
    };
    //Solicitud
    cy.request({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/comments/1',
      body: updatedcomment,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      failOnStatusCode: false, // Evita que Cypress falle en caso de un código de estado no exitoso
    }).then((response) => {
      if (response.status === 404) {
        // Si el comment no existe, mostrar un mensaje de error descriptivo
        cy.log('El comment no existe. No se puede actualizar.');
      } else {
        // Si la solicitud fue exitosa, verificar los datos del comment actualizado
        expect(response.status).to.eq(200); // Verificar que el status de la respuesta sea 200 (OK)
        expect(response.body).to.have.property('title', updatedcomment.title); // Verificar que el título del comment actualizado coincida
        expect(response.body).to.have.property('body', updatedcomment.body); // Verificar que el cuerpo del comment actualizado coincida
        expect(response.body).to.have.property('userId', updatedcomment.userId); // Verificar que el userId del comment actualizado coincida
      }
    });
  });
});
