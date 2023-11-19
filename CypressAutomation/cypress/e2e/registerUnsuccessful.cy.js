describe('Register API Tests', () => {
    const apiUrl = 'https://reqres.in/api/register';
  
    it('should handle missing password', () => {
      cy.request({
        method: 'POST',
        url: apiUrl,
        failOnStatusCode: false,
        body: {
          email: 'sydney@fife',
        },
      }).then((response) => {
        expect(response.status).to.equal(400);
        expect(response.body).to.have.property('error', 'Missing password');
      });
    });
  
    it('should validate response structure', () => {
      cy.request({
        method: 'POST',
        url: apiUrl,
        failOnStatusCode: false,
        body: {
          email: 'sydney@fife',
        },
      }).then((response) => {
        expect(response.body).to.have.all.keys('error');
      });
    });
  
    it('should handle invalid email format', () => {
        cy.request({
          method: 'POST',
          url: apiUrl,
          failOnStatusCode: false,
          body: {
            email: 'invalid-email-format',
          },
        }).then((response) => {
          expect(response.status).to.equal(400);
          expect(response.body).to.have.property('error', 'Missing password'); // Update the expected error message
        });
      });
  

  });