describe('Eliminar un comment', () => {
  it('Eliminar un comment existente via Api', () => {
    //Solicitud
    cy.request({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/comments/1'
    }).then((response) => {
      // Verificar el código de estado de la respuesta
      expect(response.status).to.eq(200);
    }).catch((error) => {
      // Manejar cualquier error que ocurra durante la solicitud
      cy.log('Error deleting comment:', error);
    });
  });
});
