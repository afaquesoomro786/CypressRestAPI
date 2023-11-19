describe('User Creation', () => {
    it('should create a new user', () => {
      cy.request('POST', '/users', {
        name: 'morpheus',
        job: 'leader',
      }).then((response) => {
        expect(response.status).to.equal(201);
        expect(response.body).to.have.property('id');
        expect(response.body.name).to.equal('morpheus');
        expect(response.body.job).to.equal('leader');
      });
    });
  });