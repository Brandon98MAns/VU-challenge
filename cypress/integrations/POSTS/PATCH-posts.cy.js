describe('Actualizar parcialmente un post existente', () => {
  it('Actualizar parcialmente un post existente via Api', () => {
    //Definimos propiedades
    const updatedFields = {
      title: 'PATCH UPDATED',
    };
    //Solicitud
    cy.request({
      method: 'PATCH',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      body: updatedFields,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => {
      expect(response.status).to.eq(200); // Verificar que el status de la respuesta sea 200 (OK)
      expect(response.body).to.have.property('id', 1); // Verificar que el id del post sea el esperado
      expect(response.body).to.have.property('title', updatedFields.title); // Verificar que el título del post actualizado coincida
      expect(response.body).to.have.property('body'); // Verificar que el cuerpo del post no ha cambiado
      expect(response.body).to.have.property('userId'); // Verificar que el userId del post no ha cambiado
    });
  });
});
