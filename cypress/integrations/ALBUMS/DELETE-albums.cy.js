describe('Eliminar un album', () => {
  it('Eliminar un album existente via Api', () => {
    //Solicitud
    cy.request({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/albums/1'
    }).then((response) => {
      // Verificar el código de estado de la respuesta
      expect(response.status).to.eq(200);
    }).catch((error) => {
      // Manejar cualquier error que ocurra durante la solicitud
      cy.log('Error deleting album:', error);
    });
  });
});
