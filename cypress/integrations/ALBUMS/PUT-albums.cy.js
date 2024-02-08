describe('Actualizar un album existente', () => {
  it('Actualizamos un album existente via Api', () => {
    //Definimos propiedades
    const updatedalbum = {
      id: 1,
      title: "ALBUM UPDATED",
      body: "ALBUM DESCRIPTION UPDATED",
      userId: 1,
    };
    //Solicitud
    cy.request({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/albums/1',
      body: updatedalbum,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      failOnStatusCode: false, // Evita que Cypress falle en caso de un código de estado no exitoso
    }).then((response) => {
      if (response.status === 404) {
        // Si el album no existe, mostrar un mensaje de error descriptivo
        cy.log('El album no existe. No se puede actualizar.');
      } else {
        // Si la solicitud fue exitosa, verificar los datos del album actualizado
        expect(response.status).to.eq(200); // Verificar que el status de la respuesta sea 200 (OK)
        expect(response.body).to.have.property('title', updatedalbum.title); // Verificar que el título del album actualizado coincida
        expect(response.body).to.have.property('body', updatedalbum.body); // Verificar que el cuerpo del album actualizado coincida
        expect(response.body).to.have.property('userId', updatedalbum.userId); // Verificar que el userId del album actualizado coincida
      }
    });
  });
});
