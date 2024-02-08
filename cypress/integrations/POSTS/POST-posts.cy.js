describe('Crear un nuevo post', () => {
  it('Agregar un nuevo post via metodo POST', () => {
    //Definimos propiedades
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
      expect(response.status).to.eq(201); // Verificar que el status de la respuesta sea 201 (creado)
      expect(response.body).to.have.property('title', newPost.title); // Verificar que el título del nuevo post coincida
      expect(response.body).to.have.property('body', newPost.body); // Verificar que el cuerpo del nuevo post coincida
      expect(response.body).to.have.property('userId', newPost.userId); // Verificar que el userId del nuevo post coincida
    });
  });
});
