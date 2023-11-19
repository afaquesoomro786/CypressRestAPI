describe('Delete User', () => {
    it('should delete an existing user', () => {
      cy.request('DELETE', '/users/2').then((response) => {
        expect(response.status).to.equal(204);
      });
    });
  });