describe('Crear un nuevo comment', () => {
  it('Agregar un nuevo comment via metodo comment', () => {
    //Definimos propiedades
    const newcomment = {
      title: 'TITULO DEL COMMENT',
      body: 'CONTENIDO DEL COMMENT',
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
      expect(response.status).to.eq(201); // Verificar que el status de la respuesta sea 201 (creado)
      expect(response.body).to.have.property('title', newcomment.title); // Verificar que el título del nuevo comment coincida
      expect(response.body).to.have.property('body', newcomment.body); // Verificar que el cuerpo del nuevo comment coincida
      expect(response.body).to.have.property('userId', newcomment.userId); // Verificar que el userId del nuevo comment coincida
    });
  });
});
