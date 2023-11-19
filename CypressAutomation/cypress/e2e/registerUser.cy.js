describe('Register API Tests', () => {
    const apiUrl = '/register';
  
    it('should successfully register a user', () => {
      cy.request('POST', apiUrl, {
        email: 'eve.holt@reqres.in',
        password: 'pistol',
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('token');
        expect(response.body.token).to.be.a('string');
      });
    });
  
    it('should return the correct user ID and token', () => {
      cy.request('POST', apiUrl, {
        email: 'eve.holt@reqres.in',
        password: 'pistol',
      }).then((response) => {
        expect(response.body.id).to.equal(4);
        expect(response.body.token).to.equal('QpwL5tke4Pnpja7X4');
      });
    });
  
    it('should validate response structure', () => {
      cy.request('POST', apiUrl, {
        email: 'eve.holt@reqres.in',
        password: 'pistol',
      }).then((response) => {
        expect(response.body).to.have.all.keys('id', 'token');
      });
    });
  
    it('should handle invalid email format', () => {
        cy.request({
          method: 'POST',
          url: apiUrl,
          failOnStatusCode: false,
          body: {
            email: 'invalid-email-format',
            password: 'pistol',
          },
        }).then((response) => {
          expect(response.status).to.equal(400);
          expect(response.body).to.have.property('error', 'Note: Only defined users succeed registration');
        });
      });
  
    it('should handle missing password', () => {
      cy.request({
        method: 'POST',
        url: apiUrl,
        failOnStatusCode: false,
        body: {
          email: 'eve.holt@reqres.in',
        },
      }).then((response) => {
        expect(response.status).to.equal(400);
        expect(response.body).to.have.property('error', 'Missing password');
      });
    });
  
   
  });