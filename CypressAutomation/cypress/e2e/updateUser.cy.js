describe('Update User', () => {
    it('should update an existing user', () => {
      cy.request('PUT', '/users/2', {
        name: 'Updated Name',
        job: 'Senior Software Engineer',
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.name).to.equal('Updated Name');
        expect(response.body.job).to.equal('Senior Software Engineer');
      });
    });
  });