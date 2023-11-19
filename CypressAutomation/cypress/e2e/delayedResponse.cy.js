describe('Delayed Response Tests', () => {
    const apiUrl = '/users?delay=3';
  
    it('should handle delayed response with status 200 and validate response structure', () => {
      cy.request({
        method: 'GET',
        url: apiUrl,
      }).then((response) => {
        expect(response.status).to.equal(200);
  
        // Validate the response structure
        expect(response.body).to.have.property('page', 1);
        expect(response.body).to.have.property('per_page', 6);
        expect(response.body).to.have.property('total', 12);
        expect(response.body).to.have.property('total_pages', 2);
        expect(response.body).to.have.property('data').to.be.an('array');
        expect(response.body.data).to.have.length(6);
  
        // Validate the structure of each user in the response data
        response.body.data.forEach((user) => {
          expect(user).to.have.property('id').that.is.a('number');
          expect(user).to.have.property('email').that.is.a('string');
          expect(user).to.have.property('first_name').that.is.a('string');
          expect(user).to.have.property('last_name').that.is.a('string');
          expect(user).to.have.property('avatar').that.is.a('string');
        });
  
        // Validate the support object
        expect(response.body).to.have.property('support').that.is.an('object');
        expect(response.body.support).to.have.property('url').that.is.a('string');
        expect(response.body.support).to.have.property('text').that.is.a('string');
      });
    });
  
  
  });
  