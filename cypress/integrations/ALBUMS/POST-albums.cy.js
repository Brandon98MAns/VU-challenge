describe('Crear un nuevo album', () => {
  it('Agregar un nuevo album via metodo album', () => {
    //Definimos propiedades
    const newalbum = {
      title: 'TITULO DEL ALBUM',
      body: 'CONTENIDO DEL ALBUM',
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
      expect(response.status).to.eq(201); // Verificar que el status de la respuesta sea 201 (creado)
      expect(response.body).to.have.property('title', newalbum.title); // Verificar que el título del nuevo album coincida
      expect(response.body).to.have.property('body', newalbum.body); // Verificar que el cuerpo del nuevo album coincida
      expect(response.body).to.have.property('userId', newalbum.userId); // Verificar que el userId del nuevo album coincida
    });
  });
});
